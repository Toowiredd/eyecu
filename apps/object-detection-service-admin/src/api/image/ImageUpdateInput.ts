import { DetectedObjectWhereUniqueInput } from "../detectedObject/DetectedObjectWhereUniqueInput";
import { DetectedObjectUpdateManyWithoutImagesInput } from "./DetectedObjectUpdateManyWithoutImagesInput";
import { ObjectCountUpdateManyWithoutImagesInput } from "./ObjectCountUpdateManyWithoutImagesInput";

export type ImageUpdateInput = {
  detectedObject?: DetectedObjectWhereUniqueInput | null;
  detectedObjects?: DetectedObjectUpdateManyWithoutImagesInput;
  objectCounts?: ObjectCountUpdateManyWithoutImagesInput;
  url?: string | null;
};
