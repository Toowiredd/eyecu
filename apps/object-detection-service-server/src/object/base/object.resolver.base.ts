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
import { Object } from "./Object";
import { ObjectCountArgs } from "./ObjectCountArgs";
import { ObjectFindManyArgs } from "./ObjectFindManyArgs";
import { ObjectFindUniqueArgs } from "./ObjectFindUniqueArgs";
import { CreateObjectArgs } from "./CreateObjectArgs";
import { UpdateObjectArgs } from "./UpdateObjectArgs";
import { DeleteObjectArgs } from "./DeleteObjectArgs";
import { CountFindManyArgs } from "../../count/base/CountFindManyArgs";
import { Count } from "../../count/base/Count";
import { DetectionFindManyArgs } from "../../detection/base/DetectionFindManyArgs";
import { Detection } from "../../detection/base/Detection";
import { ObjectService } from "../object.service";
@graphql.Resolver(() => Object)
export class ObjectResolverBase {
  constructor(protected readonly service: ObjectService) {}

  async _objectsMeta(
    @graphql.Args() args: ObjectCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Object])
  async objects(@graphql.Args() args: ObjectFindManyArgs): Promise<Object[]> {
    return this.service.objects(args);
  }

  @graphql.Query(() => Object, { nullable: true })
  async object(
    @graphql.Args() args: ObjectFindUniqueArgs
  ): Promise<Object | null> {
    const result = await this.service.object(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Object)
  async createObject(@graphql.Args() args: CreateObjectArgs): Promise<Object> {
    return await this.service.createObject({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Object)
  async updateObject(
    @graphql.Args() args: UpdateObjectArgs
  ): Promise<Object | null> {
    try {
      return await this.service.updateObject({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Object)
  async deleteObject(
    @graphql.Args() args: DeleteObjectArgs
  ): Promise<Object | null> {
    try {
      return await this.service.deleteObject(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Count], { name: "counts" })
  async findCounts(
    @graphql.Parent() parent: Object,
    @graphql.Args() args: CountFindManyArgs
  ): Promise<Count[]> {
    const results = await this.service.findCounts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Detection], { name: "detections" })
  async findDetections(
    @graphql.Parent() parent: Object,
    @graphql.Args() args: DetectionFindManyArgs
  ): Promise<Detection[]> {
    const results = await this.service.findDetections(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}