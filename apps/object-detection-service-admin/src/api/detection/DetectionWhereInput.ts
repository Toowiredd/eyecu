import { StringFilter } from "../../util/StringFilter";
import { ObjectWhereUniqueInput } from "../object/ObjectWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DetectionWhereInput = {
  id?: StringFilter;
  object?: ObjectWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
};
