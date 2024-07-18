import express from "express";
import authMiddleware from "../middleware/auth.js";

import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyOrder,
} from "../controllers/orderController.js";
import adminMiddleWare from "../middleware/adminVerify.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get("/list", adminMiddleWare, listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
