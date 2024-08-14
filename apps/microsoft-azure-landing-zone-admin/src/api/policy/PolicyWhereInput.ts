import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PolicyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  rbacType?: "Option1";
};
