import { DetectedObjectWhereUniqueInput } from "../detectedObject/DetectedObjectWhereUniqueInput";
import { DetectedObjectCreateNestedManyWithoutImagesInput } from "./DetectedObjectCreateNestedManyWithoutImagesInput";
import { ObjectCountCreateNestedManyWithoutImagesInput } from "./ObjectCountCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  url?: string | null;
  detectedObject?: DetectedObjectWhereUniqueInput | null;
  detectedObjects?: DetectedObjectCreateNestedManyWithoutImagesInput;
  objectCounts?: ObjectCountCreateNestedManyWithoutImagesInput;
};
