import { SecurityOperationsCenter as TSecurityOperationsCenter } from "../api/securityOperationsCenter/SecurityOperationsCenter";

export const SECURITYOPERATIONSCENTER_TITLE_FIELD = "name";

export const SecurityOperationsCenterTitle = (
  record: TSecurityOperationsCenter
): string => {
  return record.name?.toString() || String(record.id);
};
