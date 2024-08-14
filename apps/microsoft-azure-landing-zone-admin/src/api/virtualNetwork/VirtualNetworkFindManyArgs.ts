import { VirtualNetworkWhereInput } from "./VirtualNetworkWhereInput";
import { VirtualNetworkOrderByInput } from "./VirtualNetworkOrderByInput";

export type VirtualNetworkFindManyArgs = {
  where?: VirtualNetworkWhereInput;
  orderBy?: Array<VirtualNetworkOrderByInput>;
  skip?: number;
  take?: number;
};
