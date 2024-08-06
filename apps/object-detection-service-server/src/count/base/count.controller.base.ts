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
import { CountService } from "../count.service";
import { CountCreateInput } from "./CountCreateInput";
import { Count } from "./Count";
import { CountFindManyArgs } from "./CountFindManyArgs";
import { CountWhereUniqueInput } from "./CountWhereUniqueInput";
import { CountUpdateInput } from "./CountUpdateInput";

export class CountControllerBase {
  constructor(protected readonly service: CountService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Count })
  async createCount(@common.Body() data: CountCreateInput): Promise<Count> {
    return await this.service.createCount({
      data: {
        ...data,

        object: data.object
          ? {
              connect: data.object,
            }
          : undefined,
      },
      select: {
        count: true,
        createdAt: true,
        id: true,

        object: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Count] })
  @ApiNestedQuery(CountFindManyArgs)
  async counts(@common.Req() request: Request): Promise<Count[]> {
    const args = plainToClass(CountFindManyArgs, request.query);
    return this.service.counts({
      ...args,
      select: {
        count: true,
        createdAt: true,
        id: true,

        object: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Count })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async count(
    @common.Param() params: CountWhereUniqueInput
  ): Promise<Count | null> {
    const result = await this.service.count({
      where: params,
      select: {
        count: true,
        createdAt: true,
        id: true,

        object: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Count })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCount(
    @common.Param() params: CountWhereUniqueInput,
    @common.Body() data: CountUpdateInput
  ): Promise<Count | null> {
    try {
      return await this.service.updateCount({
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
          count: true,
          createdAt: true,
          id: true,

          object: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Count })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCount(
    @common.Param() params: CountWhereUniqueInput
  ): Promise<Count | null> {
    try {
      return await this.service.deleteCount({
        where: params,
        select: {
          count: true,
          createdAt: true,
          id: true,

          object: {
            select: {
              id: true,
            },
          },

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
