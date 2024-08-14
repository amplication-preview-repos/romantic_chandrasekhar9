import { VendorWhereUniqueInput } from "../vendor/VendorWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
  vendor?: VendorWhereUniqueInput | null;
};
