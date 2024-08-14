import { StorageAccount } from "../storageAccount/StorageAccount";

export type Database = {
  createdAt: Date;
  dbType?: "Option1" | null;
  id: string;
  name: string | null;
  storageAccount?: StorageAccount | null;
  updatedAt: Date;
};
