import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SecurityOperationsCenterService } from "./securityOperationsCenter.service";
import { SecurityOperationsCenterControllerBase } from "./base/securityOperationsCenter.controller.base";

@swagger.ApiTags("securityOperationsCenters")
@common.Controller("securityOperationsCenters")
export class SecurityOperationsCenterController extends SecurityOperationsCenterControllerBase {
  constructor(protected readonly service: SecurityOperationsCenterService) {
    super(service);
  }
}
