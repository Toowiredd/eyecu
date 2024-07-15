import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ObjectCountServiceBase } from "./base/objectCount.service.base";

@Injectable()
export class ObjectCountService extends ObjectCountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
