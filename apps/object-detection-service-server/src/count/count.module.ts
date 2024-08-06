import { Module } from "@nestjs/common";
import { CountModuleBase } from "./base/count.module.base";
import { CountService } from "./count.service";
import { CountController } from "./count.controller";
import { CountResolver } from "./count.resolver";

@Module({
  imports: [CountModuleBase],
  controllers: [CountController],
  providers: [CountService, CountResolver],
  exports: [CountService],
})
export class CountModule {}
