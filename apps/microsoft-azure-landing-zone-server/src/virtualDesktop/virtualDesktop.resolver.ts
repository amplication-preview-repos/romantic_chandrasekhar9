import * as graphql from "@nestjs/graphql";
import { VirtualDesktopResolverBase } from "./base/virtualDesktop.resolver.base";
import { VirtualDesktop } from "./base/VirtualDesktop";
import { VirtualDesktopService } from "./virtualDesktop.service";

@graphql.Resolver(() => VirtualDesktop)
export class VirtualDesktopResolver extends VirtualDesktopResolverBase {
  constructor(protected readonly service: VirtualDesktopService) {
    super(service);
  }
}
