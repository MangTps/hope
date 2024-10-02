import express, { Request, Response } from "express";
import mongoose from "mongoose";
import orderRouter from "./routes/order";
import productRouter from "./routes/product";
import orderDetailRouter from "./routes/order_detail";
import OrderDetail from "./models/order_details";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;
// Function to connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://honolulu1111:Mustbebetter2@projgpo.vxo7i.mongodb.net/",
      {
        serverSelectionTimeoutMS: 5000, // Optional: adjust timeout settings
        socketTimeoutMS: 30000, // Optional: increase socket timeout
      }
    );
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
connectDB();
app.use(express.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
//Routes
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/orderDetails", orderDetailRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
