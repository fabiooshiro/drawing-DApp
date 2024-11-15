/**
 * Converts Drawing to json string
 * sends last drawing layer's data
 * to emit a NOTICE with
 * the current drawing data
 */

import { useCanvasContext } from "../../context/CanvasContext";
import { DrawingUserInput } from "../../shared/types";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Save } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

import {
  validateInputSize,
  prepareDrawingObjectsArrays,
  hoursToTimestamp,
} from "../../utils";
import { useDrawing } from "../../hooks/useDrawing";
import { useRollups } from "../../hooks/useRollups";
import { DAPP_STATE } from "../../shared/constants";
import { useState } from "react";
import InputDialog from "../Drawing/InputDialog";
import { useConnectionContext } from "../../context/ConnectionContext";
import moment from "moment";

type CanvasToSaveProp = {
  enabled: boolean;
};
const CanvasToSave = ({ enabled }: CanvasToSaveProp) => {
  const {
    canvas,
    currentDrawingData,
    currentDrawingLayer,
    setLoading,
    dappState,
    setDappState,
  } = useCanvasContext();
  const { connectedChain, account, connectedWallet } = useConnectionContext();
  const { sendInput } = useRollups();
  const { getNoticeInput } = useDrawing();
  const currentUuid = uuidv4();
  const [isOpen, setIsOpenModal] = useState(false);
  const [inputValues, setInputValues] = useState<DrawingUserInput>({
    title: "",
    description: "",
    mintingPrice: "",
    private: false,
    open: 0,
  });
  const saveDrawing = async () => {
    setDappState(DAPP_STATE.canvasSave);

    if (!canvas) return;
    const canvasContent = canvas?.toJSON(); // or canvas.toObject()
    // !!!! extracts the !!! currents session !!!! drawing objects using the old and current drawing data
    const currentDrawingLayerObjects = prepareDrawingObjectsArrays(
      currentDrawingData,
      canvasContent.objects,
    );
    let canvasData = {
      content: currentDrawingLayerObjects,
    };
    // validate before sending the tx
    const result = validateInputSize(JSON.stringify(canvasData));
    if (!result.isValid) {
      toast.error(result.info.message, {
        description: result.info.description,
      });
      setLoading(false);
      return;
    }

    const uuid = currentDrawingData ? currentDrawingData.uuid : currentUuid;

    const strInput = getNoticeInput(uuid, canvasData, inputValues);

    if (!currentDrawingData) {
      const canvasDimensions = {
        width: canvas?.width || 0,
        height: canvas?.height || 0,
      };
      // @TODO - add open in inputValues !!!!
      // !!!!
      const closedAt = moment().unix() + hoursToTimestamp(inputValues.open); // converted in seconds
      const initCanvasData = {
        uuid: uuid,
        owner: account,
        closed_at: closedAt,
        update_log: [
          {
            drawing_objects: JSON.stringify(currentDrawingLayer),
            painter: account,
            dimensions: JSON.stringify(canvasDimensions),
          },
        ],
        dimensions: JSON.stringify(canvasDimensions),
        userInputData: inputValues,
      };
      await sendInput(strInput, initCanvasData);
    } else {
      await sendInput(strInput);
    }
  };

  const handleCanvasToSave = async () => {
    setLoading(true);
    if (!canvas) return;
    if (!canvas.isDrawingMode) {
      canvas.isDrawingMode = true;
    }
    if (!currentDrawingLayer) return;
    if (currentDrawingLayer.length < 1) return;

    if (!currentDrawingData) {
      setIsOpenModal(true);
    } else {
      saveDrawing();
    }
  };

  return (
    <>
      <Button
        variant={"default"}
        onClick={handleCanvasToSave}
        disabled={!connectedChain || !enabled}
      >
        <Save size={18} strokeWidth={1.5} />
        <span className="ml-2 hidden lg:inline-block">
          {dappState == DAPP_STATE.canvasSave ? "Saving..." : "Save Drawing"}
        </span>
      </Button>
      <InputDialog
        isOpen={isOpen}
        openHandler={setIsOpenModal}
        inputValues={inputValues}
        setInputValues={setInputValues}
        action={() => saveDrawing()}
      />
    </>
  );
};

export default CanvasToSave;
