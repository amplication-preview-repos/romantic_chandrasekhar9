import { SortOrder } from "../../util/SortOrder";

export type DatabaseOrderByInput = {
  createdAt?: SortOrder;
  dbType?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  storageAccountId?: SortOrder;
  updatedAt?: SortOrder;
};
