import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DetectedObjectWhereUniqueInput } from "../detectedObject/DetectedObjectWhereUniqueInput";
import { DetectedObjectListRelationFilter } from "../detectedObject/DetectedObjectListRelationFilter";
import { ObjectCountListRelationFilter } from "../objectCount/ObjectCountListRelationFilter";

export type ImageWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  detectedObject?: DetectedObjectWhereUniqueInput;
  detectedObjects?: DetectedObjectListRelationFilter;
  objectCounts?: ObjectCountListRelationFilter;
};
