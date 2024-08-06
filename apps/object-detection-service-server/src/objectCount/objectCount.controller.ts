import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ObjectCountService } from "./objectCount.service";
import { ObjectCountControllerBase } from "./base/objectCount.controller.base";

@swagger.ApiTags("objectCounts")
@common.Controller("objectCounts")
export class ObjectCountController extends ObjectCountControllerBase {
  constructor(protected readonly service: ObjectCountService) {
    super(service);
  }
}
