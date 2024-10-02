import { Router, Request, Response } from "express";
import Product from "../models/products";
const router = Router();

router.get("/get", (req: Request, res: Response) => {
  Product.find().then((products) => {
    res.json(products);
  });
});
router.post("/post", (req: Request, res: Response) => {
  console.log(req.body);
  const product = new Product(req.body);
  product
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
