import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SecurityOperationsCenterListRelationFilter } from "../securityOperationsCenter/SecurityOperationsCenterListRelationFilter";
import { VirtualDesktopListRelationFilter } from "../virtualDesktop/VirtualDesktopListRelationFilter";

export type VirtualNetworkWhereInput = {
  addressSpace?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  region?: StringNullableFilter;
  securityOperationsCenters?: SecurityOperationsCenterListRelationFilter;
  virtualDesktops?: VirtualDesktopListRelationFilter;
};
