/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DetectedObjectWhereUniqueInput } from "./DetectedObjectWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DetectedObjectUpdateInput } from "./DetectedObjectUpdateInput";

@ArgsType()
class UpdateDetectedObjectArgs {
  @ApiProperty({
    required: true,
    type: () => DetectedObjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DetectedObjectWhereUniqueInput)
  @Field(() => DetectedObjectWhereUniqueInput, { nullable: false })
  where!: DetectedObjectWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DetectedObjectUpdateInput,
  })
  @ValidateNested()
  @Type(() => DetectedObjectUpdateInput)
  @Field(() => DetectedObjectUpdateInput, { nullable: false })
  data!: DetectedObjectUpdateInput;
}

export { UpdateDetectedObjectArgs as UpdateDetectedObjectArgs };