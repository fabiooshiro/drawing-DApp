// XXX even though ethers is not used in the code below, it's very likely
// it will be used by any DApp, so we are already including it here
const { ethers } = require("ethers"); 
// @TODO convert all variable and func names to camelCase 
// @TODO refractor and update docker build commands
const rollup_server = process.env.ROLLUP_HTTP_SERVER_URL; 
console.log("HTTP rollup_server url is " + rollup_server); 

// utility functions
/**
 * Encode a string as a hex string
 * @param {String} string 
 */
const str2hex = (string) => {
  return ethers.utils.hexlify(ethers.utils.toUtf8Bytes(string));
}
/**
 * Decodes a hex string into 
 * a regular string
 * @param {String} hexstr 
 */
const hex2str = (hexstr) => {
  return ethers.utils.toUtf8String(hexstr)
}
/**
 * Decodes a hex string into 
 * a regular byte string
 * 
 * @param {String} hexstr 
 */
const hex2binary = (hexstr) => {
  return ethers.utils.hexlify(hexstr)
  // return ethers.utils.hexlify(hexstr.slice(2))
} 

const send_voucher = (voucher) => {
  send_post("voucher",voucher)
}
/**
 * Sends rollups notice
 * @param {Object} notice 
 */
const send_notice = (notice) => {
  send_post("notice",notice)
}
   

const send_report = (report) => {
  send_post("report",report)
}
   

const send_exception = (exception) => {
  send_post("exception",exception)
}

const clean_header = (mintHeader) => { 
  return hex2binary(mintHeader);
}
   
const send_post = async (endpoint,jsonData) => {
  const response = await fetch(rollup_server + `/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData), // @TODO revise?
  });
  console.log(`/${endpoint}: Received response status ${response.status} body ${response.statusText}`)
}  
/**
 * Prepare mint nft voucher's data
 * while saving a notice
 * with nft's data
 * @param {String} msg_sender 
 * @param {String} uuid 
 * @param {String} erc721_to_mint 
 * @param {String} mint_header 
 * @param {String} imageIPFSMeta 
 * @param {String} drawing_input 
 * @param {String} cmd 
 */
const mint_erc721_with_string = (
  msg_sender,
  uuid, 
  erc721_to_mint,
  mint_header, // selector
  imageIPFSMeta, // string
  drawing_input, 
  cmd
  ) => { 
    console.log("Preparing a VOUCHER for MINTING AN NFT") 
    const mintHeader = clean_header(mint_header) 
    const abiCoder = new ethers.utils.AbiCoder();
    // abiCoder.encode( types , values ) ⇒ string< DataHexString >
    const data = abiCoder.encode(['address', 'string'], [msg_sender,imageIPFSMeta]) 
    const payloadStr = `${mintHeader}${data.slice(2)}`.toString();  //toString() is equal to py's hex()  
    const payload = `${payloadStr}`;
    voucher = {
        destination: erc721_to_mint, 
        payload: payload
    }
    send_voucher(voucher)
    store_drawing_data(
        msg_sender,
        uuid,
        drawing_input,
        cmd
    )
}
/**
 * 
 * @param {String} sender 
 * @param {String} uuid  
 * @param {Object} drawing_input // @TODO check type
 * @param {String} cmd 
 */
const  store_drawing_data = ( sender, uuid, drawing_input, cmd ) => { 
  console.log('Store drawing data in a notice')
  console.log(typeof drawing_input)
  
  const now = getCurrentDate(); // 'YYYY-MM-DD'
  const newLogItem = { 
    date_updated: now,
    painter: sender,
    action: cmd
  } 
    if (cmd == 'cn' || cmd == 'cv'){
      // set drawing id wneh new drawing
      unix_timestamp = getCurrentTimestamp(); 
      drawing_input.id = `${sender}-${unix_timestamp}`
      drawing_input.uuid = uuid;
      drawing_input.owner = sender;
      drawing_input.date_created = now;
      drawing_input["last_updated"] = now;
      drawing_input.update_log = [];
      drawing_input.update_log.push(newLogItem); 
      if (cmd == 'cv') {
        drawing_input.voucher_requested = true;
      } else {
        drawing_input.voucher_requested = false;
      }
    }  else if (cmd == 'un' || cmd == 'uv'){
      drawing_input.uuid = uuid;
      drawing_input.owner = sender;
      drawing_input.last_updated = now;
      drawing_input.update_log.push(newLogItem);
      if (cmd == 'uv'){ 
        drawing_input.voucher_requested = true;
      }
    }
    payload = str2hex(JSON.stringify(drawing_input));
    notice = {payload: payload};
    send_notice(notice);
  }
/**
 * Get current datetime
 * formatted as 'yyyy-mm-dd'
 * @returns String
 */
const getCurrentDate = () => {  
  const now = new Date(); 
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const day = ("0" + now.getDate()).slice(-2); 

  return `${year}-${month}-${day}`;
}
/**
 * Get current timestamp
 * @returns 
 */
const getCurrentTimestamp = () => {
  const now = new Date();
  return now.getTime(); 
}
  
/**
 * handlers
 */
/**
 * Handle advance request
 * @param {Object} data 
 * @returns String status
 */
async function handle_advance(data) {
  console.log("Received advance request");

  let status = "accept";
  let payload;
  const sender = data.metadata.msg_sender.toLowerCase(); 
  try {
    payload = data.payload;
    payload = hex2str(payload); // Decodes a hex string into a regular string.
    try {
      console.log('Trying to decode json');
      // try json data
      const jsonData = JSON.parse(payload);
      const {cmd, imageIPFSMeta, erc721_to_mint, selector, uuid, drawing_input} = jsonData;
      if (cmd){
        if (cmd == 'cv' || cmd == 'uv'){
          console.log(`COMMAND: ${cmd}`)
          if (imageIPFSMeta && erc721_to_mint && selector){
            mint_erc721_with_string( 
              sender,
              uuid, 
              erc721_to_mint,
              selector,
              imageIPFSMeta, 
              drawing_input, 
              cmd
            );
          }
        } else if (cmd == 'cn' || cmd== 'un'){
          console.log(`COMMAND: ${cmd}`);
          if (drawing_input){
            store_drawing_data(
              sender,
              uuid,
              drawing_input, 
              cmd
            )
          }
        } 
      } else { // no cmd provided
        throw Error('Not supported json operation');
      }
    } catch (error) {
      console.log({error})
    }
  } catch (error) {
    status = "reject"
    msg = `Error: ${e}` 
    console.error(msg)
    send_report({"payload": str2hex(msg)})  
  }
  return status;
}


/**
 * Handle inspect request
 * 
 * @param {Object} request 
 * @returns 
 */
// @TODO revise
async function handle_inspect(request) {
  data = request.data 
  console.log('Received inspect request data.')
  console.log('Adding report.')
  report = {"payload": data.payload}
  send_report(report)
  return "accept";
}

var handlers = {
  advance_state: handle_advance,
  inspect_state: handle_inspect,
};

var finish = { status: "accept" };

(async () => {
  while (true) {
    const finish_req = await fetch(rollup_server + "/finish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "accept" }),
    });

    console.log("Received finish status " + finish_req.status);

    if (finish_req.status == 202) {
      console.log("No pending rollup request, trying again");
    } else {
      const rollup_req = await finish_req.json();
      var handler = handlers[rollup_req["request_type"]];
      finish["status"] = await handler(rollup_req["data"]);
    }
  }
})();
