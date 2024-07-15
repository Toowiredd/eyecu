import { Module } from "@nestjs/common";
import { ObjectCountModuleBase } from "./base/objectCount.module.base";
import { ObjectCountService } from "./objectCount.service";
import { ObjectCountController } from "./objectCount.controller";
import { ObjectCountResolver } from "./objectCount.resolver";

@Module({
  imports: [ObjectCountModuleBase],
  controllers: [ObjectCountController],
  providers: [ObjectCountService, ObjectCountResolver],
  exports: [ObjectCountService],
})
export class ObjectCountModule {}
