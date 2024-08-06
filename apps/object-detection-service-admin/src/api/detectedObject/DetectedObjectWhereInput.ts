import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DetectedObjectWhereInput = {
  boundingBox?: JsonFilter;
  confidenceScore?: FloatNullableFilter;
  id?: StringFilter;
  image?: ImageWhereUniqueInput;
  images?: ImageListRelationFilter;
  name?: StringNullableFilter;
};
