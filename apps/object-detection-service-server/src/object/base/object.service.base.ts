/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Object as PrismaObject,
  Count as PrismaCount,
  Detection as PrismaDetection,
} from "@prisma/client";

export class ObjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ObjectCountArgs, "select">): Promise<number> {
    return this.prisma.object.count(args);
  }

  async objects(args: Prisma.ObjectFindManyArgs): Promise<PrismaObject[]> {
    return this.prisma.object.findMany(args);
  }
  async object(
    args: Prisma.ObjectFindUniqueArgs
  ): Promise<PrismaObject | null> {
    return this.prisma.object.findUnique(args);
  }
  async createObject(args: Prisma.ObjectCreateArgs): Promise<PrismaObject> {
    return this.prisma.object.create(args);
  }
  async updateObject(args: Prisma.ObjectUpdateArgs): Promise<PrismaObject> {
    return this.prisma.object.update(args);
  }
  async deleteObject(args: Prisma.ObjectDeleteArgs): Promise<PrismaObject> {
    return this.prisma.object.delete(args);
  }

  async findCounts(
    parentId: string,
    args: Prisma.CountFindManyArgs
  ): Promise<PrismaCount[]> {
    return this.prisma.object
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .counts(args);
  }

  async findDetections(
    parentId: string,
    args: Prisma.DetectionFindManyArgs
  ): Promise<PrismaDetection[]> {
    return this.prisma.object
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .detections(args);
  }
}
