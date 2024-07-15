/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ObjectCount } from "./ObjectCount";
import { ObjectCountCountArgs } from "./ObjectCountCountArgs";
import { ObjectCountFindManyArgs } from "./ObjectCountFindManyArgs";
import { ObjectCountFindUniqueArgs } from "./ObjectCountFindUniqueArgs";
import { CreateObjectCountArgs } from "./CreateObjectCountArgs";
import { UpdateObjectCountArgs } from "./UpdateObjectCountArgs";
import { DeleteObjectCountArgs } from "./DeleteObjectCountArgs";
import { Image } from "../../image/base/Image";
import { ObjectCountService } from "../objectCount.service";
@graphql.Resolver(() => ObjectCount)
export class ObjectCountResolverBase {
  constructor(protected readonly service: ObjectCountService) {}

  async _objectCountsMeta(
    @graphql.Args() args: ObjectCountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ObjectCount])
  async objectCounts(
    @graphql.Args() args: ObjectCountFindManyArgs
  ): Promise<ObjectCount[]> {
    return this.service.objectCounts(args);
  }

  @graphql.Query(() => ObjectCount, { nullable: true })
  async objectCount(
    @graphql.Args() args: ObjectCountFindUniqueArgs
  ): Promise<ObjectCount | null> {
    const result = await this.service.objectCount(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ObjectCount)
  async createObjectCount(
    @graphql.Args() args: CreateObjectCountArgs
  ): Promise<ObjectCount> {
    return await this.service.createObjectCount({
      ...args,
      data: {
        ...args.data,

        image: args.data.image
          ? {
              connect: args.data.image,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ObjectCount)
  async updateObjectCount(
    @graphql.Args() args: UpdateObjectCountArgs
  ): Promise<ObjectCount | null> {
    try {
      return await this.service.updateObjectCount({
        ...args,
        data: {
          ...args.data,

          image: args.data.image
            ? {
                connect: args.data.image,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ObjectCount)
  async deleteObjectCount(
    @graphql.Args() args: DeleteObjectCountArgs
  ): Promise<ObjectCount | null> {
    try {
      return await this.service.deleteObjectCount(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Image, {
    nullable: true,
    name: "image",
  })
  async getImage(@graphql.Parent() parent: ObjectCount): Promise<Image | null> {
    const result = await this.service.getImage(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}