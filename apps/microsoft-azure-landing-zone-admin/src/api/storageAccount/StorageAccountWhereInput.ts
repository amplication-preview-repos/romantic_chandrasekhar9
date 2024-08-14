import { DatabaseListRelationFilter } from "../database/DatabaseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StorageAccountWhereInput = {
  accountType?: "Option1";
  databases?: DatabaseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  region?: StringNullableFilter;
};
