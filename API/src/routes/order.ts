import { Router, Request, Response } from "express";
import Order from "../models/orders";
import OrderDetail from "../models/order_details";
const router = Router();

router.get("/get", (req: Request, res: Response) => {
  Order.find().then((orders) => {
    res.json(orders);
  });
});
router.post("/post", (req: Request, res: Response) => {
  console.log(req.body);
  const order = new Order(req.body);
  order
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
