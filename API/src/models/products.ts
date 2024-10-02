import mongoose, { Date, Document, Schema, Model } from "mongoose";
type ProductType = Document & {
  productid: string;
  productname: string;
  supplierid: string;
  categoryid: string;
  quantityperunit: string;
  unitprice: string;
  unitsinstock: string;
  unitsonorder: string;
  reorderlevel: string;
  discontinued: string;
};

const productSchema: Schema<ProductType> = new Schema({
  productid: String,
  productname: String,
  supplierid: String,
  categoryid: String,
  quantityperunit: String,
  unitprice: String,
  unitsinstock: String,
  unitsonorder: String,
  reorderlevel: String,
  discontinued: String,
});

const Product: Model<ProductType> = mongoose.model<ProductType>(
  "products",
  productSchema
);

export default Product;
