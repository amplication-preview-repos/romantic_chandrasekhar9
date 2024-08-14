import * as graphql from "@nestjs/graphql";
import { SecurityOperationsCenterResolverBase } from "./base/securityOperationsCenter.resolver.base";
import { SecurityOperationsCenter } from "./base/SecurityOperationsCenter";
import { SecurityOperationsCenterService } from "./securityOperationsCenter.service";

@graphql.Resolver(() => SecurityOperationsCenter)
export class SecurityOperationsCenterResolver extends SecurityOperationsCenterResolverBase {
  constructor(protected readonly service: SecurityOperationsCenterService) {
    super(service);
  }
}
