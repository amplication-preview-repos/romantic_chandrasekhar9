import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VirtualNetworkWhereUniqueInput } from "../virtualNetwork/VirtualNetworkWhereUniqueInput";

export type SecurityOperationsCenterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  virtualNetwork?: VirtualNetworkWhereUniqueInput;
};
