import * as graphql from "@nestjs/graphql";
import { DetectedObjectResolverBase } from "./base/detectedObject.resolver.base";
import { DetectedObject } from "./base/DetectedObject";
import { DetectedObjectService } from "./detectedObject.service";

@graphql.Resolver(() => DetectedObject)
export class DetectedObjectResolver extends DetectedObjectResolverBase {
  constructor(protected readonly service: DetectedObjectService) {
    super(service);
  }
}
