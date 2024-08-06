/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DetectionService } from "../detection.service";
import { DetectionCreateInput } from "./DetectionCreateInput";
import { Detection } from "./Detection";
import { DetectionFindManyArgs } from "./DetectionFindManyArgs";
import { DetectionWhereUniqueInput } from "./DetectionWhereUniqueInput";
import { DetectionUpdateInput } from "./DetectionUpdateInput";

export class DetectionControllerBase {
  constructor(protected readonly service: DetectionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Detection })
  async createDetection(
    @common.Body() data: DetectionCreateInput
  ): Promise<Detection> {
    return await this.service.createDetection({
      data: {
        ...data,

        object: data.object
          ? {
              connect: data.object,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        object: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Detection] })
  @ApiNestedQuery(DetectionFindManyArgs)
  async detections(@common.Req() request: Request): Promise<Detection[]> {
    const args = plainToClass(DetectionFindManyArgs, request.query);
    return this.service.detections({
      ...args,
      select: {
        createdAt: true,
        id: true,

        object: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Detection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async detection(
    @common.Param() params: DetectionWhereUniqueInput
  ): Promise<Detection | null> {
    const result = await this.service.detection({
      where: params,
      select: {
        createdAt: true,
        id: true,

        object: {
          select: {
            id: true,
          },
        },

        timestamp: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Detection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDetection(
    @common.Param() params: DetectionWhereUniqueInput,
    @common.Body() data: DetectionUpdateInput
  ): Promise<Detection | null> {
    try {
      return await this.service.updateDetection({
        where: params,
        data: {
          ...data,

          object: data.object
            ? {
                connect: data.object,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          object: {
            select: {
              id: true,
            },
          },

          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Detection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDetection(
    @common.Param() params: DetectionWhereUniqueInput
  ): Promise<Detection | null> {
    try {
      return await this.service.deleteDetection({
        where: params,
        select: {
          createdAt: true,
          id: true,

          object: {
            select: {
              id: true,
            },
          },

          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
