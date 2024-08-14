import { Product } from "../product/Product";

export type Vendor = {
  contactInfo: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
