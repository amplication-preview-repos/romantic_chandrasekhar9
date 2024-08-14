import { VirtualNetworkWhereUniqueInput } from "../virtualNetwork/VirtualNetworkWhereUniqueInput";

export type SecurityOperationsCenterCreateInput = {
  monitoringTools?: Array<"Option1">;
  name?: string | null;
  virtualNetwork?: VirtualNetworkWhereUniqueInput | null;
};
