import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CountService } from "./count.service";
import { CountControllerBase } from "./base/count.controller.base";

@swagger.ApiTags("counts")
@common.Controller("counts")
export class CountController extends CountControllerBase {
  constructor(protected readonly service: CountService) {
    super(service);
  }
}
