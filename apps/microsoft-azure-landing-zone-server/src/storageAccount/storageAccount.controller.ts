import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StorageAccountService } from "./storageAccount.service";
import { StorageAccountControllerBase } from "./base/storageAccount.controller.base";

@swagger.ApiTags("storageAccounts")
@common.Controller("storageAccounts")
export class StorageAccountController extends StorageAccountControllerBase {
  constructor(protected readonly service: StorageAccountService) {
    super(service);
  }
}
