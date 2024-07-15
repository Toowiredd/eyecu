import { DetectedObject } from "../detectedObject/DetectedObject";
import { ObjectCount } from "../objectCount/ObjectCount";

export type Image = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  detectedObject?: DetectedObject | null;
  detectedObjects?: Array<DetectedObject>;
  objectCounts?: Array<ObjectCount>;
};
