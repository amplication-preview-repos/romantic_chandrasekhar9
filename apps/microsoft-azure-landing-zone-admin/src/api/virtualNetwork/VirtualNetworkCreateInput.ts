import { InputJsonValue } from "../../types";
import { SecurityOperationsCenterCreateNestedManyWithoutVirtualNetworksInput } from "./SecurityOperationsCenterCreateNestedManyWithoutVirtualNetworksInput";
import { VirtualDesktopCreateNestedManyWithoutVirtualNetworksInput } from "./VirtualDesktopCreateNestedManyWithoutVirtualNetworksInput";

export type VirtualNetworkCreateInput = {
  addressSpace?: InputJsonValue;
  name?: string | null;
  region?: string | null;
  securityOperationsCenters?: SecurityOperationsCenterCreateNestedManyWithoutVirtualNetworksInput;
  virtualDesktops?: VirtualDesktopCreateNestedManyWithoutVirtualNetworksInput;
};
