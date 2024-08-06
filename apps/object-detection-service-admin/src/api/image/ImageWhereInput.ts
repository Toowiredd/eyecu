import { DetectedObjectWhereUniqueInput } from "../detectedObject/DetectedObjectWhereUniqueInput";
import { DetectedObjectListRelationFilter } from "../detectedObject/DetectedObjectListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ObjectCountListRelationFilter } from "../objectCount/ObjectCountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  detectedObject?: DetectedObjectWhereUniqueInput;
  detectedObjects?: DetectedObjectListRelationFilter;
  id?: StringFilter;
  objectCounts?: ObjectCountListRelationFilter;
  url?: StringNullableFilter;
};
