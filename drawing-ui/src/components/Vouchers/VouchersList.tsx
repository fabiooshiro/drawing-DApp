import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { MINT_SELECTOR, ETHER_TRANSFER_SELECTOR } from "../../shared/constants";
import {
  VoucherExtended,
  DataNoticeEdge,
  DrawingInputExtended,
} from "../../shared/types";
import Voucher from "./Voucher";
import pako from "pako";
import { useInspect } from "../../hooks/useInspect";
import { useVouchersWithProofQuery } from "../../utils/queries";
import { useConnectionContext } from "../../context/ConnectionContext";

const VouchersList = () => {
  const { account } = useConnectionContext();
  const { inspectCall } = useInspect();
  const [cursor, setCursor] = useState<string | null | undefined | null>(null);

  const [result, reexecuteQuery] = useVouchersWithProofQuery({
    variables: { cursor },
    pause: true,
  });
  const [myVouchers, setMyVouchers] = useState<VoucherExtended[]>([]);
  const [drawings, setDrawings] = useState<DrawingInputExtended[]>([]);
  const [uuids, setUuids] = useState<string[]>([]);
  const { data } = result;

  const fetchImages = async (arg: string[]) => {
    console.warn("Fetching voucher images ...");
    if (arg.length) {
      // remove duplicate uuids
      const filteredArg = arg.filter((v, i, a) => a.indexOf(v) == i);
      const queryArg = JSON.stringify(filteredArg);
      const queryString = `drawings/uuids/${queryArg}`;
      const data = await inspectCall(queryString);
      setDrawings(data.drawings);
    }
    // send inspect call for the uuids
  };
  const getVoucherDrawing = useCallback(
    (uuid: string | undefined) => {
      return drawings.filter((d) => d.uuid == uuid);
    },
    [drawings],
  );
  useEffect(() => {}, [account]);
  /**
   * Reexecuting query if the component
   * is accessed before vouchers are emition is finished.
   * Otherwise - if user requests a voucher, opens the voucher's component,
   * sees all his emitted vouchers, no new voucher he owns are expected to be seen.
   */
  useEffect(() => {
    if (result.fetching) return;
    // Set up to refetch in one second, if the query is idle
    // Retrieve vouchers every 1000 ms
    const timerId = setTimeout(() => {
      reexecuteQuery({ requestPolicy: "network-only" });
    }, 1000);
    const length = data?.vouchers?.edges?.length;
    if (length) {
      // Update cursor so that next GraphQL poll retrieves only newer data
      setCursor(data.vouchers.pageInfo.endCursor);
    }
    return () => clearTimeout(timerId);
  }, [result.fetching, reexecuteQuery]);
  /**
   * Prepare vouchers data.
   * Filter user's vouchers.
   */
  useEffect(() => {
    let uuids: string[] = [];
    let newVouchers: VoucherExtended[] = [];
    data?.vouchers.edges.forEach((node: { node: VoucherExtended }) => {
      // init data
      const n = node.node;
      const payload = n?.payload; // voucher data
      let inputPayload = n?.input.payload; // ?!
      let info = null;
      let ownerAddress = null;
      let notices = n?.input.notices; // drawing data
      let drawings = [];
      let payloadSliced = payload;
      // @TODO inputPayload is used for ?!
      if (inputPayload) {
        try {
          inputPayload = ethers.utils.toUtf8String(inputPayload);
        } catch (e) {
          inputPayload = inputPayload + " (hex)";
        }
      } else {
        inputPayload = "(empty)";
      }
      let selector = "";

      if (payloadSliced) {
        const decoder = new ethers.utils.AbiCoder();
        selector = decoder.decode(["bytes4"], payload)[0];
        payloadSliced = ethers.utils.hexDataSlice(payload, 4);
        try {
          switch (selector) {
            case MINT_SELECTOR: {
              const decode = decoder.decode(
                ["address", "string"],
                payloadSliced,
              );
              // payload = `Mint Erc721 - String: ${decode[1]} - Address: ${decode[0]}`;
              info = decode[1];
              ownerAddress = decode[0];
              break;
            }
            case ETHER_TRANSFER_SELECTOR: {
              //ether transfer;
              const decode2 = decoder.decode(
                ["address", "uint256"],
                payloadSliced,
              );
              // payload = `Ether Transfer, amount: ${ethers.utils.formatEther(decode2[1])}`;
              // info: decode2[1];
              info = `Ether Transfer, amount: ${ethers.utils.formatEther(decode2[1])}`;
              ownerAddress = decode2[0];
            }
            default: {
              break;
            }
          }
        } catch (e) {
          console.error(e);
        }
      } else {
        payloadSliced = "(empty)";
      }
      // filter only current account's vouchers
      if (ownerAddress.toLowerCase() === account?.toLowerCase()) {
        if (MINT_SELECTOR == selector) {
          // drawings data
          drawings = notices.edges.map(({ node }: DataNoticeEdge) => {
            let payload = node?.payload;
            let compressedData;
            if (payload) {
              try {
                compressedData = ethers.utils.arrayify(payload);
              } catch (e) {
                console.error(e);
              }
            } else {
              payload = "(empty)";
            }
            if (compressedData) {
              try {
                const drawingData = pako.inflate(compressedData, {
                  to: "string",
                });
                const data = JSON.parse(drawingData);
                const { uuid } = data;
                // last drawing layer, !uuid!, owner, ... at the time the voucher was requested
                return uuid;
              } catch (e) {
                console.error(e);
              }
            }
          });
        }

        // curent voucher data
        // @TODO revise voucher data and fix types
        const currentVoucher = {
          id: `${n?.id}`, // voucher
          selector,
          index: n?.index, // voucher
          destination: `${n?.destination ?? ""}`, // voucher
          payload: `${payload}`, // voucher
          input: n ? { index: n.input.index, payload: inputPayload } : {}, // voucher
          info: info, // voucher core info... @TODO more descriptive name
          ownerAddress: ownerAddress, // voucher
          drawingUUID: drawings && drawings[0] ? drawings[0] : "", // drawing uuid
          proof: n.proof,
          executed: null,
        };
        newVouchers.push(currentVoucher);
        if (drawings.length && drawings[0]) {
          uuids.push(drawings[0]);
        }
      }
    });
    // @TODO sort by index
    if (newVouchers.length) {
      // updates my-vouchers array
      setMyVouchers([...newVouchers, ...myVouchers]);
      if (uuids.length) setUuids(uuids);
    }
  }, [data, account]);
  useEffect(() => {
    fetchImages(uuids);
  }, [uuids]);
  return (
    <div>
      {myVouchers && myVouchers.length > 0 ? (
        myVouchers.map((n: VoucherExtended) => {
          const { drawingUUID } = n;
          const drawing = getVoucherDrawing(drawingUUID);
          return (
            <Voucher
              key={`${n.input.index}-${n.index}`}
              voucherData={n}
              drawing={drawing[0]}
            />
          );
        })
      ) : (
        <div className="py-2">Your quequed NFTs will appear here...</div>
      )}
    </div>
  );
};
export default VouchersList;
