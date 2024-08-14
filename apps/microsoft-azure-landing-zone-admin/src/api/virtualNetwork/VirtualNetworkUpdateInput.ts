import { InputJsonValue } from "../../types";
import { SecurityOperationsCenterUpdateManyWithoutVirtualNetworksInput } from "./SecurityOperationsCenterUpdateManyWithoutVirtualNetworksInput";
import { VirtualDesktopUpdateManyWithoutVirtualNetworksInput } from "./VirtualDesktopUpdateManyWithoutVirtualNetworksInput";

export type VirtualNetworkUpdateInput = {
  addressSpace?: InputJsonValue;
  name?: string | null;
  region?: string | null;
  securityOperationsCenters?: SecurityOperationsCenterUpdateManyWithoutVirtualNetworksInput;
  virtualDesktops?: VirtualDesktopUpdateManyWithoutVirtualNetworksInput;
};
