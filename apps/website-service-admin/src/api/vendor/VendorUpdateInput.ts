import { ProductUpdateManyWithoutVendorsInput } from "./ProductUpdateManyWithoutVendorsInput";

export type VendorUpdateInput = {
  contactInfo?: string | null;
  name?: string | null;
  products?: ProductUpdateManyWithoutVendorsInput;
};
