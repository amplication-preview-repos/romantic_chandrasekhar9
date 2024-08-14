import * as graphql from "@nestjs/graphql";
import { StorageAccountResolverBase } from "./base/storageAccount.resolver.base";
import { StorageAccount } from "./base/StorageAccount";
import { StorageAccountService } from "./storageAccount.service";

@graphql.Resolver(() => StorageAccount)
export class StorageAccountResolver extends StorageAccountResolverBase {
  constructor(protected readonly service: StorageAccountService) {
    super(service);
  }
}
