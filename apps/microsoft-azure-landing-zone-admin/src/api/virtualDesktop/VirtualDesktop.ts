import { VirtualNetwork } from "../virtualNetwork/VirtualNetwork";

export type VirtualDesktop = {
  createdAt: Date;
  id: string;
  name: string | null;
  osType?: "Option1" | null;
  updatedAt: Date;
  virtualNetwork?: VirtualNetwork | null;
};
