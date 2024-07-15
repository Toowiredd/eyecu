import { Module } from "@nestjs/common";
import { DetectedObjectModuleBase } from "./base/detectedObject.module.base";
import { DetectedObjectService } from "./detectedObject.service";
import { DetectedObjectController } from "./detectedObject.controller";
import { DetectedObjectResolver } from "./detectedObject.resolver";

@Module({
  imports: [DetectedObjectModuleBase],
  controllers: [DetectedObjectController],
  providers: [DetectedObjectService, DetectedObjectResolver],
  exports: [DetectedObjectService],
})
export class DetectedObjectModule {}
