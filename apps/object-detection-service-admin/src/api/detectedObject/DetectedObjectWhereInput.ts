import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type DetectedObjectWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  confidenceScore?: FloatNullableFilter;
  boundingBox?: JsonFilter;
  images?: ImageListRelationFilter;
  image?: ImageWhereUniqueInput;
};
