import { Module } from "@nestjs/common";
import { VirtualDesktopModuleBase } from "./base/virtualDesktop.module.base";
import { VirtualDesktopService } from "./virtualDesktop.service";
import { VirtualDesktopController } from "./virtualDesktop.controller";
import { VirtualDesktopResolver } from "./virtualDesktop.resolver";

@Module({
  imports: [VirtualDesktopModuleBase],
  controllers: [VirtualDesktopController],
  providers: [VirtualDesktopService, VirtualDesktopResolver],
  exports: [VirtualDesktopService],
})
export class VirtualDesktopModule {}
