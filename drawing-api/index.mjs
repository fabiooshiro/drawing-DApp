import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fabric } from "fabric"; // v5
import { API_ENDPOINTS, ORIGIN_BASE } from "./config.mjs";
import imageToBase64 from "image-to-base64";

const port = 3000;
const corsOptions = {
  origin: ORIGIN_BASE,
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "1mb" })); //@TODO - set here proper limit to allow canvas to be saved properly
app.use(express.static("public")); //make the images accessible by the drawing-ui

function toBase64(filePath) {
  const img = fs.readFileSync(filePath);
  return Buffer.from(img).toString('base64');
}

app.post(API_ENDPOINTS.canvasStore, async (req, res) => {
  
  res.set("Content-Type", "application/json");
  
  if (req.body) {
    const fullPath = `public/canvas-images/`;
    const filePath = fullPath + `${req.body.filename}.png`;

    try {
      //     //# create .png and save it on disk
      const canvas = new fabric.Canvas(null, { width: 600, height: 600 }); //sync width & height with FE
      canvas.loadFromJSON(JSON.stringify({ objects: req.body.image }), function () {
        // reset zoom so pan actions work as expected
        canvas.setZoom(1);
        //group all the objects
        //const group = fabric.util.groupSVGElements(objects, options);
        const group = new fabric.Group(canvas.getObjects());
        //find the centre of the group on the canvas
        const x = (group.left + (group.width / 2)) - (canvas.width / 2);
        const y = (group.top + (group.height / 2)) - (canvas.height / 2);
        //and pan to it
        canvas.absolutePan({x:x, y:y});
        //now we need to decide whether width or height should determine the scaling
        //e.g. a portrait box in a landscape canvas (height) needs scaling differently to a portrait box in a portrait canvas (could be height or width)
        //or a landscape box in a portrait canvas (width)
        //work out the distance between the edges of the group and the canvas
        const heightDist = canvas.getHeight() - group.height;
        const widthDist = canvas.getWidth() - group.width;
        let groupDimension = 0;
        let canvasDimension = 0;
        //the smaller the number then that's the side we need to use as a reference to scale
        //either group is inside the canvas (positive number) so the edge closest to the limits of the canvas will be used as the reference scale (smallest positive difference)
        //or the group extends outside the canvas so the edge that extends further will be the reference (large negative number)
        //either way, we want the smallest number
        if (heightDist < widthDist) {
          //height is the reference so need the height to scale to be nearly the height of the canvas
          groupDimension = group.height;
          canvasDimension = canvas.getHeight();
        } else {
          //width is the reference so need the width to scale to be nearly the width of the canvas
          groupDimension = group.width;
          canvasDimension = canvas.getWidth();
        }
        //work out how to scale the group to match the canvas size (then only make it zoom 80% of the way)
        const zoom = (canvasDimension / groupDimension) * 0.8;
        //we've already panned the canvas to the centre of the group, so now zomm using teh centre of teh canvas as teh reference point
        canvas.zoomToPoint({ x: canvas.width / 2, y: canvas.height / 2 }, zoom);

        canvas.renderAll();
        
        fs.promises
          .mkdir(
            path.dirname(fullPath),
            {
              recursive: true,
            }
          )
          .then((x) => {
            const out = fs.createWriteStream(filePath);
            const stream = canvas.createPNGStream();
            stream.pipe(out);
            out.on("finish", () => {
              console.log("The PNG file was created.");
              const base64String = toBase64(filePath);
              res.send(
                JSON.stringify({
                  success: true,
                  base64out: base64String,
                })
              );
            });
          })
          .catch((error) => {
            console.log(error);
          });
      });

    } catch (error) {
      console.log(error);
    }

  } else {
    res.send(
      JSON.stringify({
        error: "No data to save...",
      })
    );
  }
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

export const viteNodeApp = app;