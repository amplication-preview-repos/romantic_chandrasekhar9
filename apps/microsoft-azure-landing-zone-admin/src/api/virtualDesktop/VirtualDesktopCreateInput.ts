import { VirtualNetworkWhereUniqueInput } from "../virtualNetwork/VirtualNetworkWhereUniqueInput";

export type VirtualDesktopCreateInput = {
  name?: string | null;
  osType?: "Option1" | null;
  virtualNetwork?: VirtualNetworkWhereUniqueInput | null;
};
