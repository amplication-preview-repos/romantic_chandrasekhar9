import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StorageAccountWhereUniqueInput } from "../storageAccount/StorageAccountWhereUniqueInput";

export type DatabaseWhereInput = {
  dbType?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  storageAccount?: StorageAccountWhereUniqueInput;
};
