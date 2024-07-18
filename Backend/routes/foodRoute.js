import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";
import adminMiddleWare from "../middleware/adminVerify.js";

const foodRouter = express.Router();

//image storage Engine

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

foodRouter.post("/add",adminMiddleWare, upload.single("image"), addFood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove",adminMiddleWare, removeFood);

export default foodRouter;
