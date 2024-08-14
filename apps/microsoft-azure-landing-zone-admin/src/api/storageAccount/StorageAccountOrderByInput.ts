import { SortOrder } from "../../util/SortOrder";

export type StorageAccountOrderByInput = {
  accountType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  region?: SortOrder;
  updatedAt?: SortOrder;
};
