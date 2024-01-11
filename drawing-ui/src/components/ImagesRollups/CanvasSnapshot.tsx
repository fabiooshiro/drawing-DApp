import { fabric } from "fabric";
import { useCanvasContext } from "../../context/CanvasContext";
import { DAPP_STATE, INITIAL_DRAWING_OPTIONS } from "../../shared/constants";
import { DrawingInputExtended } from "../../shared/types";
import { sliceAccountStr } from "../../utils";
import { useMemo } from "react";

type CanvasSnapshotProp = {
  src: DrawingInputExtended;
};
const CanvasSnapshot = ({ src }: CanvasSnapshotProp) => {
  const { canvas, setDappState, setCurrentDrawingData } = useCanvasContext();
  const { drawing, owner } = src;
  const loadCanvasFromImage = async () => {
    if (!canvas) return;
    canvas.clear();

    fabric.loadSVGFromString(drawing, function (objects, options) {
      var obj = fabric.util.groupSVGElements(objects, options);
      obj.set({
        left: 0,
        top: 0,
        scaleX: canvas.width && obj.width ? canvas.width / obj.width : 1,
        scaleY: canvas.height && obj.height ? canvas.height / obj.height : 1,
      });

      canvas.add(obj).renderAll();
    });
    setDappState(DAPP_STATE.drawingUpdate);

    setCurrentDrawingData(src);
  };

  const drawingPreview = useMemo(() => {
    const svg = new Blob([drawing], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svg);
    return <img src={url} alt="drawing preview" />;
  }, [drawing]);

  return (
    <div className="rounded-lg border bg-background p-2">
      <div onClick={loadCanvasFromImage}>{drawingPreview}</div>
      <span className="text-xs">Owner: {sliceAccountStr(owner)}</span>
    </div>
  );
};

export default CanvasSnapshot;
