import mongoose, { Date, Document, Schema, Model } from "mongoose";
type order_details = Document & {
  orderid: string;
  productid: string;
  unitpriice: string;
  quantity: string;
  discount: string;
  shippeddate: string;
};

const order_details_schema: Schema<order_details> = new Schema({
  orderid: String,
  productid: String,
  unitpriice: String,
  quantity: String,
  discount: String,
  shippeddate: String,
});

const OrderDetail: Model<order_details> = mongoose.model<order_details>(
  "order_details",
  order_details_schema
);

export default OrderDetail;
