import { JsonValue } from "type-fest";
import { SecurityOperationsCenter } from "../securityOperationsCenter/SecurityOperationsCenter";
import { VirtualDesktop } from "../virtualDesktop/VirtualDesktop";

export type VirtualNetwork = {
  addressSpace: JsonValue;
  createdAt: Date;
  id: string;
  name: string | null;
  region: string | null;
  securityOperationsCenters?: Array<SecurityOperationsCenter>;
  updatedAt: Date;
  virtualDesktops?: Array<VirtualDesktop>;
};
