import { useCanvasControls } from "../../hooks/useCanvasControl";
import BrushControl from "./BrushControl";
import ColorControl from "./ColorControl";
import LineWidthControl from "./LineWidthControl";
const DrawingControls = () => {
  const { isActiveControl } = useCanvasControls();

  return isActiveControl ? (
    <div className="flex items-center gap-2">
      <ColorControl />
      <LineWidthControl />
      <BrushControl />
    </div>
  ) : (
    <div></div>
  );
};

export default DrawingControls;
