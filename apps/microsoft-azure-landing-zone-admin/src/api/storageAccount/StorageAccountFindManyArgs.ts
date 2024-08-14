import { StorageAccountWhereInput } from "./StorageAccountWhereInput";
import { StorageAccountOrderByInput } from "./StorageAccountOrderByInput";

export type StorageAccountFindManyArgs = {
  where?: StorageAccountWhereInput;
  orderBy?: Array<StorageAccountOrderByInput>;
  skip?: number;
  take?: number;
};
