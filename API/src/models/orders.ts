import mongoose, { Date, Document, Schema, Model } from "mongoose";
type OrderType = Document & {
  orderid: string;
  customerid: string;
  employeeid: string;
  orderdate: string;
  requireddate: string;
  shippeddate: string;
  shipvia: string;
  freight: string;
  shipname: string;
  shipaddress: string;
  shipcity: string;
  shipregion: string;
  shippostalcode: string;
  shipcountry: string;
};

const orderSchema: Schema<OrderType> = new Schema({
  orderid: String,
  customerid: String,
  employeeid: String,
  orderdate: String,
  requireddate: String,
  shippeddate: String,
  shipvia: String,
  freight: String,
  shipname: String,
  shipaddress: String,
  shipcity: String,
  shipregion: String,
  shippostalcode: String,
  shipcountry: String,
});

const Order: Model<OrderType> = mongoose.model<OrderType>(
  "orders",
  orderSchema
);

export default Order;
