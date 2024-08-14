import { VirtualNetwork } from "../virtualNetwork/VirtualNetwork";

export type SecurityOperationsCenter = {
  createdAt: Date;
  id: string;
  monitoringTools?: Array<"Option1">;
  name: string | null;
  updatedAt: Date;
  virtualNetwork?: VirtualNetwork | null;
};
