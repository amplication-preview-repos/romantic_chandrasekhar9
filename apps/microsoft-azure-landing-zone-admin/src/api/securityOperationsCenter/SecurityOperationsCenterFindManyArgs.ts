import { SecurityOperationsCenterWhereInput } from "./SecurityOperationsCenterWhereInput";
import { SecurityOperationsCenterOrderByInput } from "./SecurityOperationsCenterOrderByInput";

export type SecurityOperationsCenterFindManyArgs = {
  where?: SecurityOperationsCenterWhereInput;
  orderBy?: Array<SecurityOperationsCenterOrderByInput>;
  skip?: number;
  take?: number;
};
