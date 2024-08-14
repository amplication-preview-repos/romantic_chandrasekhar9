import { SortOrder } from "../../util/SortOrder";

export type VirtualDesktopOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  osType?: SortOrder;
  updatedAt?: SortOrder;
  virtualNetworkId?: SortOrder;
};
