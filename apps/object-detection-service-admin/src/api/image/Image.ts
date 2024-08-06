import { DetectedObject } from "../detectedObject/DetectedObject";
import { ObjectCount } from "../objectCount/ObjectCount";

export type Image = {
  createdAt: Date;
  detectedObject?: DetectedObject | null;
  detectedObjects?: Array<DetectedObject>;
  id: string;
  objectCounts?: Array<ObjectCount>;
  updatedAt: Date;
  url: string | null;
};
