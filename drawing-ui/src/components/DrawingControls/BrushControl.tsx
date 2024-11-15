import { useState } from "react";
import { useCanvasContext } from "../../context/CanvasContext";
import { fabric } from "fabric";
import {
  CANVAS_CURSOR_TYPES,
  INITIAL_DRAWING_OPTIONS,
} from "../../shared/constants";
import { getCursorSvg } from "../../utils";
import { Button } from "../ui/button";
import { Pencil, SprayCan } from "lucide-react";

const BrushControl = () => {
  const { canvas, canvasOptions, setOptions } = useCanvasContext();
  const [sprayEnabled, setSprayEnabled] = useState(false);

  const toggleBrush = () => {
    if (!canvas) return;
    if (!sprayEnabled) {
      setOptions({ ...canvasOptions, cursorType: CANVAS_CURSOR_TYPES.spray }); // update in context
      canvas.freeDrawingBrush = new fabric["SprayBrush"](canvas);
      const brush = canvas.freeDrawingBrush;
      const brushSize =
        canvasOptions.lineWidth || INITIAL_DRAWING_OPTIONS.minBrushWidth;
      brush.color = canvasOptions.color;
      brush.width = brushSize;

      // get cursor by context cursor type
      const getDrawCursor = (cursorType: string) => {
        const cursor = getCursorSvg(brushSize, canvasOptions.color, cursorType);
        if (!cursor) return;
        return `data:image/svg+xml;base64,${window.btoa(cursor)}`;
      };
      // set custom cursor
      const cursor = `url(${getDrawCursor(CANVAS_CURSOR_TYPES.spray)}) ${brushSize / 2} ${
        brushSize / 2
      }, crosshair`;

      canvas.freeDrawingCursor = cursor;
      canvas.setCursor(cursor);
      setSprayEnabled(true);
    } else {
      setOptions({ ...canvasOptions, cursorType: CANVAS_CURSOR_TYPES.circle }); // update in context
      canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      const brush = canvas.freeDrawingBrush;
      const brushSize =
        canvasOptions.lineWidth || INITIAL_DRAWING_OPTIONS.minBrushWidth;
      brush.color = canvasOptions.color;
      brush.width = brushSize;
      // get cursor by context cursor type
      const getDrawCursor = (cursorType: string) => {
        const cursor = getCursorSvg(brushSize, canvasOptions.color, cursorType);
        if (!cursor) return;
        return `data:image/svg+xml;base64,${window.btoa(cursor)}`;
      };

      // set custom cursor
      const cursor = `url(${getDrawCursor(CANVAS_CURSOR_TYPES.circle)}) ${brushSize / 2} ${
        brushSize / 2
      }, crosshair`;

      canvas.freeDrawingCursor = cursor;
      canvas.setCursor(cursor);
      setSprayEnabled(false);
    }
  };

  return (
    <Button variant={"outline"} onClick={toggleBrush} className="ml-2">
      {canvasOptions.cursorType === CANVAS_CURSOR_TYPES.circle ? (
        <>
          <SprayCan size={18} className="mr-1" strokeWidth={1.5} />
          <span className="hidden xl:inline-block">Spray</span>
        </>
      ) : (
        <>
          <Pencil size={18} className="mr-1" strokeWidth={1.5} />
          <span className="hidden xl:inline-block">Pencil</span>
        </>
      )}
    </Button>
  );
};

export default BrushControl;
