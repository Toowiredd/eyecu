import * as graphql from "@nestjs/graphql";
import { ObjectCountResolverBase } from "./base/objectCount.resolver.base";
import { ObjectCount } from "./base/ObjectCount";
import { ObjectCountService } from "./objectCount.service";

@graphql.Resolver(() => ObjectCount)
export class ObjectCountResolver extends ObjectCountResolverBase {
  constructor(protected readonly service: ObjectCountService) {
    super(service);
  }
}
