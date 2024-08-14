import * as graphql from "@nestjs/graphql";
import { VirtualNetworkResolverBase } from "./base/virtualNetwork.resolver.base";
import { VirtualNetwork } from "./base/VirtualNetwork";
import { VirtualNetworkService } from "./virtualNetwork.service";

@graphql.Resolver(() => VirtualNetwork)
export class VirtualNetworkResolver extends VirtualNetworkResolverBase {
  constructor(protected readonly service: VirtualNetworkService) {
    super(service);
  }
}
