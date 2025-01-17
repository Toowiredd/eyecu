/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DetectedObjectWhereInput } from "./DetectedObjectWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DetectedObjectListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DetectedObjectWhereInput,
  })
  @ValidateNested()
  @Type(() => DetectedObjectWhereInput)
  @IsOptional()
  @Field(() => DetectedObjectWhereInput, {
    nullable: true,
  })
  every?: DetectedObjectWhereInput;

  @ApiProperty({
    required: false,
    type: () => DetectedObjectWhereInput,
  })
  @ValidateNested()
  @Type(() => DetectedObjectWhereInput)
  @IsOptional()
  @Field(() => DetectedObjectWhereInput, {
    nullable: true,
  })
  some?: DetectedObjectWhereInput;

  @ApiProperty({
    required: false,
    type: () => DetectedObjectWhereInput,
  })
  @ValidateNested()
  @Type(() => DetectedObjectWhereInput)
  @IsOptional()
  @Field(() => DetectedObjectWhereInput, {
    nullable: true,
  })
  none?: DetectedObjectWhereInput;
}
export { DetectedObjectListRelationFilter as DetectedObjectListRelationFilter };
