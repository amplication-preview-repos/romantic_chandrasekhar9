import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VirtualDesktopServiceBase } from "./base/virtualDesktop.service.base";

@Injectable()
export class VirtualDesktopService extends VirtualDesktopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
