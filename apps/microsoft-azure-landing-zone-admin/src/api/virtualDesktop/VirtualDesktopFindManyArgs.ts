import { VirtualDesktopWhereInput } from "./VirtualDesktopWhereInput";
import { VirtualDesktopOrderByInput } from "./VirtualDesktopOrderByInput";

export type VirtualDesktopFindManyArgs = {
  where?: VirtualDesktopWhereInput;
  orderBy?: Array<VirtualDesktopOrderByInput>;
  skip?: number;
  take?: number;
};
