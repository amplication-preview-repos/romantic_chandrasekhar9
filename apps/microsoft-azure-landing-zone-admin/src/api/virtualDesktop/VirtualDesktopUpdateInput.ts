import { VirtualNetworkWhereUniqueInput } from "../virtualNetwork/VirtualNetworkWhereUniqueInput";

export type VirtualDesktopUpdateInput = {
  name?: string | null;
  osType?: "Option1" | null;
  virtualNetwork?: VirtualNetworkWhereUniqueInput | null;
};
