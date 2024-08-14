import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VirtualNetworkWhereUniqueInput } from "../virtualNetwork/VirtualNetworkWhereUniqueInput";

export type VirtualDesktopWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  osType?: "Option1";
  virtualNetwork?: VirtualNetworkWhereUniqueInput;
};
