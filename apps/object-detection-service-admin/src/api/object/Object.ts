import { Count } from "../count/Count";
import { Detection } from "../detection/Detection";

export type Object = {
  counts?: Array<Count>;
  createdAt: Date;
  detections?: Array<Detection>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
