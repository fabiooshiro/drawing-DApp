import { useEffect, useRef, useState } from "react";
import { DrawingInputExtended } from "../../shared/types";
import CanvasSnapshot from "./CanvasSnapshot";
import { useWallets } from "@web3-onboard/react";
import { useInspect } from "../../hooks/useInspect";
import { useCanvasContext } from "../../context/CanvasContext";
import { DAPP_STATE } from "../../shared/constants";
type DrawingsListProp = {
  drawingsType: string;
};
const DrawingsList = ({ drawingsType }: DrawingsListProp) => {
  // @TODO refractor fetching drawings
  // @TODO set hasNext, page number => get from the response
  const [connectedWallet] = useWallets();
  const { dappState } = useCanvasContext();
  const { inspectCall } = useInspect();
  const [drawings, setDrawings] = useState<DrawingInputExtended[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false); // BE check that results < Offset and send has_next = False
  const [lastElement, setLastElement] = useState(null);
  const [fetch, setFetch] = useState(false);
  const account = connectedWallet.accounts[0].address;
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setFetch(true);
      }
    }),
  );
  useEffect(() => {
    if (fetch) {
      fetchData();
    }
  }, [fetch]);
  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);
  const initDrawingsData = async () => {
    if (
      dappState == DAPP_STATE.canvasInit ||
      dappState == DAPP_STATE.refetchDrawings
    ) {
      let queryString = "";
      if (drawingsType == "all") {
        queryString = "drawings/page/1";
      } else if (drawingsType == "user") {
        queryString = `drawings/owner/${account}/page/1`;
      }
      const data = await inspectCall(queryString);
      const { has_next, next_page, drawings } = data;
      setDrawings(drawings);
      setHasNext(has_next);
      setPage(next_page);
    }
  };
  const fetchData = async () => {
    console.log("Fetching more drawings");
    setIsLoading(true);
    setFetch(false);
    setError({ error: false, message: "" });
    console.log({ page });
    let queryString = "";
    if (drawingsType == "all") {
      queryString = `drawings/page/${page}`;
    } else if (drawingsType == "user") {
      queryString = `drawings/owner/${account}/page/${page}`;
    }
    const data = await inspectCall(queryString);
    const { has_next, next_page, drawings } = data;
    if (drawings) setDrawings((prevItems) => [...prevItems, ...drawings]);
    setPage(next_page);
    setHasNext(has_next);
    setIsLoading(false);
  };

  useEffect(() => {
    initDrawingsData();
  }, [dappState]);

  return (
    <div className="flex flex-wrap -mx-1">
      {drawings && drawings.length > 0 ? (
        drawings.map((drawing, i) => {
          try {
            return i === drawings.length - 1 && !isLoading ? (
              <div
                key={`${drawing.uuid}`}
                className="w-1/2 p-2 last-element"
                ref={setLastElement}
              >
                <CanvasSnapshot src={drawing} />
              </div>
            ) : (
              <div key={`${drawing.uuid}`} className="w-1/2 p-2">
                <CanvasSnapshot src={drawing} />
              </div>
            );
          } catch (e) {
            console.log(e);
          }
        })
      ) : (
        <div className="p-2">Canvas shanpshots will appear here...</div>
      )}
      {/* @TODO loader component */}
      {isLoading && <p>Loading...</p>}
      {error?.error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default DrawingsList;
