import { StorageAccountWhereUniqueInput } from "../storageAccount/StorageAccountWhereUniqueInput";

export type DatabaseUpdateInput = {
  dbType?: "Option1" | null;
  name?: string | null;
  storageAccount?: StorageAccountWhereUniqueInput | null;
};
