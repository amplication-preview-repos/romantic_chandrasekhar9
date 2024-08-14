import { Database } from "../database/Database";

export type StorageAccount = {
  accountType?: "Option1" | null;
  createdAt: Date;
  databases?: Array<Database>;
  id: string;
  name: string | null;
  region: string | null;
  updatedAt: Date;
};
