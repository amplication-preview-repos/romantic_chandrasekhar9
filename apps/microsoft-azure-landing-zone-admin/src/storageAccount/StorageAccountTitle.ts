import { StorageAccount as TStorageAccount } from "../api/storageAccount/StorageAccount";

export const STORAGEACCOUNT_TITLE_FIELD = "name";

export const StorageAccountTitle = (record: TStorageAccount): string => {
  return record.name?.toString() || String(record.id);
};
