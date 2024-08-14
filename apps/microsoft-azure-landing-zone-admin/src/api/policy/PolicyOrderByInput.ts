import { SortOrder } from "../../util/SortOrder";

export type PolicyOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  rbacType?: SortOrder;
  updatedAt?: SortOrder;
};
