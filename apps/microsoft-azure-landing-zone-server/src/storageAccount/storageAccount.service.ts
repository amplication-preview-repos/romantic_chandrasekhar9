import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StorageAccountServiceBase } from "./base/storageAccount.service.base";

@Injectable()
export class StorageAccountService extends StorageAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
