/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CountWhereUniqueInput } from "../../count/base/CountWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CountUpdateManyWithoutObjectsInput {
  @Field(() => [CountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CountWhereUniqueInput],
  })
  connect?: Array<CountWhereUniqueInput>;

  @Field(() => [CountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CountWhereUniqueInput],
  })
  disconnect?: Array<CountWhereUniqueInput>;

  @Field(() => [CountWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CountWhereUniqueInput],
  })
  set?: Array<CountWhereUniqueInput>;
}

export { CountUpdateManyWithoutObjectsInput as CountUpdateManyWithoutObjectsInput };
