import { CountCreateNestedManyWithoutObjectsInput } from "./CountCreateNestedManyWithoutObjectsInput";
import { DetectionCreateNestedManyWithoutObjectsInput } from "./DetectionCreateNestedManyWithoutObjectsInput";

export type ObjectCreateInput = {
  counts?: CountCreateNestedManyWithoutObjectsInput;
  detections?: DetectionCreateNestedManyWithoutObjectsInput;
  name?: string | null;
};
