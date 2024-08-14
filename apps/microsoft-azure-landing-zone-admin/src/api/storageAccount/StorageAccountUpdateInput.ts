import { DatabaseUpdateManyWithoutStorageAccountsInput } from "./DatabaseUpdateManyWithoutStorageAccountsInput";

export type StorageAccountUpdateInput = {
  accountType?: "Option1" | null;
  databases?: DatabaseUpdateManyWithoutStorageAccountsInput;
  name?: string | null;
  region?: string | null;
};
