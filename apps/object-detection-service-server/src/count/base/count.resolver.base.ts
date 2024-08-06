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
import { Count } from "./Count";
import { CountCountArgs } from "./CountCountArgs";
import { CountFindManyArgs } from "./CountFindManyArgs";
import { CountFindUniqueArgs } from "./CountFindUniqueArgs";
import { CreateCountArgs } from "./CreateCountArgs";
import { UpdateCountArgs } from "./UpdateCountArgs";
import { DeleteCountArgs } from "./DeleteCountArgs";
import { Object } from "../../object/base/Object";
import { CountService } from "../count.service";
@graphql.Resolver(() => Count)
export class CountResolverBase {
  constructor(protected readonly service: CountService) {}

  async _countsMeta(
    @graphql.Args() args: CountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Count])
  async counts(@graphql.Args() args: CountFindManyArgs): Promise<Count[]> {
    return this.service.counts(args);
  }

  @graphql.Query(() => Count, { nullable: true })
  async count(
    @graphql.Args() args: CountFindUniqueArgs
  ): Promise<Count | null> {
    const result = await this.service.count(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Count)
  async createCount(@graphql.Args() args: CreateCountArgs): Promise<Count> {
    return await this.service.createCount({
      ...args,
      data: {
        ...args.data,

        object: args.data.object
          ? {
              connect: args.data.object,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Count)
  async updateCount(
    @graphql.Args() args: UpdateCountArgs
  ): Promise<Count | null> {
    try {
      return await this.service.updateCount({
        ...args,
        data: {
          ...args.data,

          object: args.data.object
            ? {
                connect: args.data.object,
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

  @graphql.Mutation(() => Count)
  async deleteCount(
    @graphql.Args() args: DeleteCountArgs
  ): Promise<Count | null> {
    try {
      return await this.service.deleteCount(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Object, {
    nullable: true,
    name: "object",
  })
  async getObject(@graphql.Parent() parent: Count): Promise<Object | null> {
    const result = await this.service.getObject(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
