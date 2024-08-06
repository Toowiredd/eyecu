import * as graphql from "@nestjs/graphql";
import { CountResolverBase } from "./base/count.resolver.base";
import { Count } from "./base/Count";
import { CountService } from "./count.service";

@graphql.Resolver(() => Count)
export class CountResolver extends CountResolverBase {
  constructor(protected readonly service: CountService) {
    super(service);
  }
}
