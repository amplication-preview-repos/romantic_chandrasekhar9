import { Vendor } from "../vendor/Vendor";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  quantity: number | null;
  updatedAt: Date;
  vendor?: Vendor | null;
};
