import { useEffect, useState } from "react";
import CanvasControls from "../components/CanvasControls";
import DrawingControls from "../components/Drawing/DrawingControls";
import CanvasObjectsControl from "../components/CanvasObjectsControl.tsx";
import { useCanvasContext } from "../context/CanvasContext";
import { prepareDrawingObjectsArrays, validateInputSize } from "../utils";
import { CanvasLimitations } from "../shared/types";

const Controls = () => {
  const {
    canvas,
    currentDrawingData,
    currentDrawingLayer,
    setCurrentDrawingLayer,
    redoObjectsArr,
    setRedoObjectsArr,
  } = useCanvasContext();
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const [currentResult, setCurrentResult] = useState<CanvasLimitations>({
    isValid: true,
    info: {
      message: "",
      description: "",
      size: "",
      type: "",
    },
  });

  useEffect(() => {
    if (!canvas) return;
    const validateCanvasInputSize = () => {
      console.log("validate input size ...");
      // Gets current drawing data
      const canvasContent = canvas.toJSON(); // or canvas.toObject()
      const currentDrawingLayerObjects = prepareDrawingObjectsArrays(
        currentDrawingData,
        canvasContent.objects,
      ); // extracts the currents session drawing objects using the old and current drawing data
      setCurrentDrawingLayer(currentDrawingLayerObjects); // enable only if current drawing layer is not empty
      let canvasData = {
        // svg: base64_encode(canvasSVG), // for validation before minting
        content: currentDrawingLayerObjects,
      };
      // validate before sending the tx
      const result = validateInputSize(
        currentDrawingData,
        JSON.stringify(canvasData),
        true,
      );
      setCurrentResult(result);
    };
    const resetRedoObjectsArr = () => {
      setRedoObjectsArr([]);
    };
    canvas.on("mouse:move", validateCanvasInputSize); // sometimes stops working ..
    canvas.on("after:render", validateCanvasInputSize);
    canvas.on("path:created", resetRedoObjectsArr);
  }, [canvas]);
  useEffect(() => {
    if (!currentDrawingLayer) return;
    currentDrawingLayer.length < 1 ? setCanUndo(false) : setCanUndo(true); // enable only if current drawing layer is not empty
  }, [currentDrawingLayer]);
  useEffect(() => {
    if (!redoObjectsArr) return;
    redoObjectsArr.length < 1 ? setCanRedo(false) : setCanRedo(true);
  }, [redoObjectsArr]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
        <DrawingControls />
        <CanvasControls
          enabled={currentResult.isValid && !!currentDrawingLayer?.length}
          canUndo={canUndo}
          canRedo={canRedo}
        />
        <CanvasObjectsControl />
      </div>
      <div
        className={`mt-3 text-center text-sm ${currentResult.info.type === "warning" ? "text-orange-500" : currentResult.info.type === "error" ? "font-semibold text-red-500" : ""}`}
      >
        {currentResult.info.size} {currentResult.info.message}{" "}
        {currentResult.info.description}
      </div>
    </div>
  );
};

export default Controls;
