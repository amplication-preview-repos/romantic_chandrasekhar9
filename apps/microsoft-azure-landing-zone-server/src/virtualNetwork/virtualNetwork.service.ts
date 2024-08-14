import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VirtualNetworkServiceBase } from "./base/virtualNetwork.service.base";

@Injectable()
export class VirtualNetworkService extends VirtualNetworkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
