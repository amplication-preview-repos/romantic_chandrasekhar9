import { DatabaseCreateNestedManyWithoutStorageAccountsInput } from "./DatabaseCreateNestedManyWithoutStorageAccountsInput";

export type StorageAccountCreateInput = {
  accountType?: "Option1" | null;
  databases?: DatabaseCreateNestedManyWithoutStorageAccountsInput;
  name?: string | null;
  region?: string | null;
};
