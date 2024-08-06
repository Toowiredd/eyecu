import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ObjectWhereUniqueInput } from "../object/ObjectWhereUniqueInput";

export type CountWhereInput = {
  count?: IntNullableFilter;
  id?: StringFilter;
  object?: ObjectWhereUniqueInput;
};
