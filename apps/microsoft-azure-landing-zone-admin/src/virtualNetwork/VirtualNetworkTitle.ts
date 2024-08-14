import { VirtualNetwork as TVirtualNetwork } from "../api/virtualNetwork/VirtualNetwork";

export const VIRTUALNETWORK_TITLE_FIELD = "name";

export const VirtualNetworkTitle = (record: TVirtualNetwork): string => {
  return record.name?.toString() || String(record.id);
};
