import { Module } from "@nestjs/common";
import { StorageAccountModuleBase } from "./base/storageAccount.module.base";
import { StorageAccountService } from "./storageAccount.service";
import { StorageAccountController } from "./storageAccount.controller";
import { StorageAccountResolver } from "./storageAccount.resolver";

@Module({
  imports: [StorageAccountModuleBase],
  controllers: [StorageAccountController],
  providers: [StorageAccountService, StorageAccountResolver],
  exports: [StorageAccountService],
})
export class StorageAccountModule {}
