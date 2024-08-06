import { CountListRelationFilter } from "../count/CountListRelationFilter";
import { DetectionListRelationFilter } from "../detection/DetectionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ObjectWhereInput = {
  counts?: CountListRelationFilter;
  detections?: DetectionListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
