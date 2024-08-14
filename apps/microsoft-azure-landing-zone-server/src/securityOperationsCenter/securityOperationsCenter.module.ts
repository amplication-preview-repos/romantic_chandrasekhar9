import { Module } from "@nestjs/common";
import { SecurityOperationsCenterModuleBase } from "./base/securityOperationsCenter.module.base";
import { SecurityOperationsCenterService } from "./securityOperationsCenter.service";
import { SecurityOperationsCenterController } from "./securityOperationsCenter.controller";
import { SecurityOperationsCenterResolver } from "./securityOperationsCenter.resolver";

@Module({
  imports: [SecurityOperationsCenterModuleBase],
  controllers: [SecurityOperationsCenterController],
  providers: [
    SecurityOperationsCenterService,
    SecurityOperationsCenterResolver,
  ],
  exports: [SecurityOperationsCenterService],
})
export class SecurityOperationsCenterModule {}
