import { Module } from "@nestjs/common";
import { VirtualNetworkModuleBase } from "./base/virtualNetwork.module.base";
import { VirtualNetworkService } from "./virtualNetwork.service";
import { VirtualNetworkController } from "./virtualNetwork.controller";
import { VirtualNetworkResolver } from "./virtualNetwork.resolver";

@Module({
  imports: [VirtualNetworkModuleBase],
  controllers: [VirtualNetworkController],
  providers: [VirtualNetworkService, VirtualNetworkResolver],
  exports: [VirtualNetworkService],
})
export class VirtualNetworkModule {}
