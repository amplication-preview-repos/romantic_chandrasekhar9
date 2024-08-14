import { ProductCreateNestedManyWithoutVendorsInput } from "./ProductCreateNestedManyWithoutVendorsInput";

export type VendorCreateInput = {
  contactInfo?: string | null;
  name?: string | null;
  products?: ProductCreateNestedManyWithoutVendorsInput;
};
