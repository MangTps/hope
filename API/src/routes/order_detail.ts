import { Router, Request, Response } from "express";
import OrderDetail from "../models/order_details";
const router = Router();

router.get("/get", (req: Request, res: Response) => {
  OrderDetail.find().then((orderdetails) => {
    res.json(orderdetails);
  });
});
router.post("/post", (req: Request, res: Response) => {
  console.log(req.body);
  const orderDetail = new OrderDetail(req.body);
  orderDetail
    .save()
    .then((savedOrder) => {
      res.status(201).json(savedOrder);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({ error: "An error occurred while creating order." });
    });
});

export default router;
