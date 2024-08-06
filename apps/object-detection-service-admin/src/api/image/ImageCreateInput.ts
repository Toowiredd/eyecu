import { DetectedObjectWhereUniqueInput } from "../detectedObject/DetectedObjectWhereUniqueInput";
import { DetectedObjectCreateNestedManyWithoutImagesInput } from "./DetectedObjectCreateNestedManyWithoutImagesInput";
import { ObjectCountCreateNestedManyWithoutImagesInput } from "./ObjectCountCreateNestedManyWithoutImagesInput";

export type ImageCreateInput = {
  detectedObject?: DetectedObjectWhereUniqueInput | null;
  detectedObjects?: DetectedObjectCreateNestedManyWithoutImagesInput;
  objectCounts?: ObjectCountCreateNestedManyWithoutImagesInput;
  url?: string | null;
};
