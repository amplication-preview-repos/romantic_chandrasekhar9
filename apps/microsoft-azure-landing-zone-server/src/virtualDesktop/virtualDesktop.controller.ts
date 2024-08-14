import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VirtualDesktopService } from "./virtualDesktop.service";
import { VirtualDesktopControllerBase } from "./base/virtualDesktop.controller.base";

@swagger.ApiTags("virtualDesktops")
@common.Controller("virtualDesktops")
export class VirtualDesktopController extends VirtualDesktopControllerBase {
  constructor(protected readonly service: VirtualDesktopService) {
    super(service);
  }
}
