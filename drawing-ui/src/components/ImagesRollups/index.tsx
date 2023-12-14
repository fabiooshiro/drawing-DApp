import CanvasSnapshot from "./CanvasSnapshot";
import { ethers } from "ethers";
import { useNoticesQuery } from "../../generated/graphql";
import { useToast } from "@chakra-ui/react";
import { useWallets } from "@web3-onboard/react";
import { useEffect, useState } from "react";
import { DAPP_STATE } from "../../shared/constants";
import { useCanvasContext } from "../../context/CanvasContext";
import { DrawingInput, DrawingInputExtended } from "../../shared/types";
import moment from "moment";
type DataNoticeEdge = {
  __typename?: "NoticeEdge" | undefined;
  node: {
    __typename?: "Notice" | undefined;
    index: number;
    payload: string;
    input: {
      __typename?: "Input" | undefined;
      index: number;
    };
  };
};
const ImagesListRollups = () => {
  const [connectedWallet] = useWallets();
  const [result, reexecuteQuery] = useNoticesQuery();
  const { data, error } = result;
  const mineDrawings: DrawingInputExtended[] = [];
  const account = connectedWallet.accounts[0].address;
  const [length, setLength] = useState(0);

  // useEffect(() => {
  //   if (result.fetching) return;
  //   if (dappState !== DAPP_STATE.canvasSave) return;

  //   reexecuteQuery({ requestPolicy: "network-only" });

  //   setDappState(DAPP_STATE.canvasInit);
  // }, [result.fetching, reexecuteQuery, dappState]);

  useEffect(() => {
    if (result.fetching) return;
    // Set up to refetch in one second, if the query is idle
    // and to be able to fetch the new notices
    const timerId = setTimeout(() => {
      reexecuteQuery({ requestPolicy: "network-only" });
    }, 5000);

    return () => clearTimeout(timerId);
  }, [result.fetching, reexecuteQuery]);

  if (error) return <p className="error">Oh no... {error.message}</p>;

  if (!data || !data.notices) return <p className="no-notices">No notices</p>;

  const drawingsData = data.notices.edges.map(({ node }: DataNoticeEdge) => {
    let payload = node?.payload;
    let drawingData;

    if (payload) {
      try {
        payload = ethers.utils.toUtf8String(payload);
      } catch (e) {
        payload = payload;
      }
    } else {
      payload = "(empty)";
    }

    try {
      drawingData = JSON.parse(payload);
      // sort by last_updated descending and check the drawing data
      if (drawingData.owner?.toLowerCase() == account.toLowerCase()) {
        mineDrawings.push(drawingData);
      }
      return drawingData;
    } catch (e) {
      console.log(e);
    }
  });

  drawingsData.sort((a, b) => {
    return moment(b.last_updated).isSameOrAfter(a.last_updated);
  });
  mineDrawings.sort((a, b) => {
    return moment(b.last_updated).isSameOrAfter(a.last_updated);
  });

  return (
    <div className="lists-container">
      <div className="list-wrapper">
        <div className="list-header">
          <h5>All Drawings</h5>
        </div>
        <div className="images-list">
          <div className="images-list-box">
            {drawingsData.length > 0 ? (
              drawingsData.map((drawing, idx) => {
                try {
                  return (
                    <CanvasSnapshot
                      key={`${drawing.id}-${idx}`}
                      src={drawing}
                    />
                  );
                } catch (e) {
                  console.log(e);
                }
              })
            ) : (
              <div className="canvas-image">
                Canvas shanpshots will appear here...
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="list-wrapper">
        <div className="list-header">
          <h5>Mine Drawings</h5>
        </div>
        <div className="images-list">
          <div className="images-list-box">
            {mineDrawings.length > 0 ? (
              mineDrawings.map((drawing, idx) => {
                try {
                  return (
                    <CanvasSnapshot
                      key={`${drawing.id}-${idx}`}
                      src={drawing}
                    />
                  );
                } catch (e) {
                  console.log(e);
                }
              })
            ) : (
              <div className="canvas-image">
                Canvas shanpshots will appear here...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesListRollups;
