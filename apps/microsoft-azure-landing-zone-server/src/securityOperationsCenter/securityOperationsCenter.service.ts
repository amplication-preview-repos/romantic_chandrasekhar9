import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SecurityOperationsCenterServiceBase } from "./base/securityOperationsCenter.service.base";

@Injectable()
export class SecurityOperationsCenterService extends SecurityOperationsCenterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
