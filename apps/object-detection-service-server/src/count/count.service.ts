import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CountServiceBase } from "./base/count.service.base";

@Injectable()
export class CountService extends CountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
