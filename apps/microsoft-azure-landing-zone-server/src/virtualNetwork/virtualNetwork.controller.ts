import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VirtualNetworkService } from "./virtualNetwork.service";
import { VirtualNetworkControllerBase } from "./base/virtualNetwork.controller.base";

@swagger.ApiTags("virtualNetworks")
@common.Controller("virtualNetworks")
export class VirtualNetworkController extends VirtualNetworkControllerBase {
  constructor(protected readonly service: VirtualNetworkService) {
    super(service);
  }
}
