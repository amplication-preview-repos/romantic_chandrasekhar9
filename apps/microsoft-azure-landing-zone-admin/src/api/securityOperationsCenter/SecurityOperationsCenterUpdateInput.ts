import { VirtualNetworkWhereUniqueInput } from "../virtualNetwork/VirtualNetworkWhereUniqueInput";

export type SecurityOperationsCenterUpdateInput = {
  monitoringTools?: Array<"Option1">;
  name?: string | null;
  virtualNetwork?: VirtualNetworkWhereUniqueInput | null;
};
