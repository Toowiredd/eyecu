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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DetectedObjectWhereUniqueInput } from "../../detectedObject/base/DetectedObjectWhereUniqueInput";
import { DetectedObjectListRelationFilter } from "../../detectedObject/base/DetectedObjectListRelationFilter";
import { ObjectCountListRelationFilter } from "../../objectCount/base/ObjectCountListRelationFilter";

@InputType()
class ImageWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  url?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DetectedObjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DetectedObjectWhereUniqueInput)
  @IsOptional()
  @Field(() => DetectedObjectWhereUniqueInput, {
    nullable: true,
  })
  detectedObject?: DetectedObjectWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => DetectedObjectListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DetectedObjectListRelationFilter)
  @IsOptional()
  @Field(() => DetectedObjectListRelationFilter, {
    nullable: true,
  })
  detectedObjects?: DetectedObjectListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ObjectCountListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ObjectCountListRelationFilter)
  @IsOptional()
  @Field(() => ObjectCountListRelationFilter, {
    nullable: true,
  })
  objectCounts?: ObjectCountListRelationFilter;
}

export { ImageWhereInput as ImageWhereInput };