// Copyright 2022 Cartesi Pte. Ltd.
//
// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use
// this file except in compliance with the License. You may obtain a copy of the
// License at http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed
// under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
// CONDITIONS OF ANY KIND, either express or implied. See the License for the
// specific language governing permissions and limitations under the License.

import { ethers } from "ethers";
import { storeSvg } from "./utils/fetch.js";
// const rollup_server = process.env.ROLLUP_HTTP_SERVER_URL;
const rollup_server = tjs.getenv("ROLLUP_HTTP_SERVER_URL");
console.log("HTTP rollup_server url is " + rollup_server);
import { URL, API_ENDPOINTS, API_HEADERS, API_CONFIG } from "./config.js";
import axios from "axios";

async function handle_advance(data) {
  // console.log("Received advance request data " + JSON.stringify(data));
  // const payload = data["payload"];
  // try {
  //   const payloadStr = ethers.utils.toUtf8String(payload);
  //   // console.log(`Adding notice TEST"${payloadStr}"`);

  //   const id = Date.now();
  //   const svgName = `${id}-canvas`; //@TODO revise the name eventually

  //   // storeSvg(svgName, JSON.parse(payloadStr));
  // } catch (e) {
  //   console.log(`Adding notice with binary value "${payload}"`);
  // }
  // const advance_req = await fetch(rollup_server + "/notice", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ payload }),
  // });
  // const json = await advance_req.json();
  // console.log(
  //   "Received notice status " +
  //     advance_req.status +
  //     " body " +
  //     JSON.stringify(json)
  // );
  // const id = Date.now();
  // const svgName = `${id}-canvas`; //@TODO revise the name eventually
  const data_req = JSON.stringify({
    ...API_CONFIG,
    document: {
      name: "svgName",
      content: "payload",
    },
  });
  // try {
  //   const advance_req = await fetch(
  //     `https://us-west-2.aws.data.mongodb-api.com/app/data-mslnq/endpoint/data/v1/action/insertOne`,
  //     {
  //       method: "POST",
  //       headers: API_HEADERS,
  //       body: data_req,
  //     }
  //   );
  //   const json = await advance_req.json();
  //   console.log(json, "mongo request");
  // } catch (e) {
  //   console.log(e, "the error");
  // }
  try {
    const res = await axios.post(
      "https://us-west-2.aws.data.mongodb-api.com/app/data-mslnq/endpoint/data/v1/action/insertOne",
      {
        ...API_CONFIG,
        document: {
          name: "svgName",
          content: "payload",
        },
      },
      {
        headers: API_HEADERS,
      }
    );
    console.log(res);
  } catch (e) {
    console.log(e);
  }

  return "accept";
}

async function handle_inspect(data) {
  console.log("Received inspect request data " + JSON.stringify(data));
  const payload = data["payload"];
  try {
    const payloadStr = ethers.utils.toUtf8String(payload);
    console.log(`Adding report "${payloadStr}"`);
  } catch (e) {
    console.log(`Adding report with binary value "${payload}"`);
  }
  const inspect_req = await fetch(rollup_server + "/report", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ payload }),
  });
  console.log("Received report status " + inspect_req.status);
  return "accept";
}

var handlers = {
  advance_state: handle_advance,
  inspect_state: handle_inspect,
};

var finish = { status: "accept" };
var rollup_address = null;

// (async () => {
//   while (true) {
//     console.log("Sending finish");
//     const finish_req = await fetch(rollup_server + "/finish", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ status: "accept" }),
//     });
//     console.log("Received finish status " + finish_req.status);

//     if (finish_req.status == 202) {
//       console.log("No pending rollup request, trying again");
//     } else {
//       const rollup_req = await finish_req.json();
//       const metadata = rollup_req["data"]["metadata"];
//       if (
//         metadata &&
//         metadata["epoch_index"] == 0 &&
//         metadata["input_index"] == 0
//       ) {
//         rollup_address = metadata["msg_sender"];
//         console.log("Captured rollup address: " + rollup_address);
//       } else {
//         var handler = handlers[rollup_req["request_type"]];
//         finish["status"] = await handler(rollup_req["data"]);
//       }
//     }
//   }
// })();
handle_advance();