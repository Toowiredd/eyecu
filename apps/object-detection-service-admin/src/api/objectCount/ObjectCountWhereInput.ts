import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ObjectCountWhereInput = {
  count?: IntNullableFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  objectName?: StringNullableFilter;
};
