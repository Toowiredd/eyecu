import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ObjectCountWhereInput = {
  id?: StringFilter;
  objectName?: StringNullableFilter;
  count?: IntNullableFilter;
  image?: ImageWhereUniqueInput;
};
