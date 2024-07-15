import { DetectedObjectWhereUniqueInput } from "../detectedObject/DetectedObjectWhereUniqueInput";
import { DetectedObjectUpdateManyWithoutImagesInput } from "./DetectedObjectUpdateManyWithoutImagesInput";
import { ObjectCountUpdateManyWithoutImagesInput } from "./ObjectCountUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  url?: string | null;
  detectedObject?: DetectedObjectWhereUniqueInput | null;
  detectedObjects?: DetectedObjectUpdateManyWithoutImagesInput;
  objectCounts?: ObjectCountUpdateManyWithoutImagesInput;
};
