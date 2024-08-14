import { StorageAccountWhereUniqueInput } from "../storageAccount/StorageAccountWhereUniqueInput";

export type DatabaseCreateInput = {
  dbType?: "Option1" | null;
  name?: string | null;
  storageAccount?: StorageAccountWhereUniqueInput | null;
};
