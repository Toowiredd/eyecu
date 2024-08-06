import { CountUpdateManyWithoutObjectsInput } from "./CountUpdateManyWithoutObjectsInput";
import { DetectionUpdateManyWithoutObjectsInput } from "./DetectionUpdateManyWithoutObjectsInput";

export type ObjectUpdateInput = {
  counts?: CountUpdateManyWithoutObjectsInput;
  detections?: DetectionUpdateManyWithoutObjectsInput;
  name?: string | null;
};
