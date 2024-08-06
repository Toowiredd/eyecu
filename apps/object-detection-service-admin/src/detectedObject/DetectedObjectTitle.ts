import { DetectedObject as TDetectedObject } from "../api/detectedObject/DetectedObject";

export const DETECTEDOBJECT_TITLE_FIELD = "name";

export const DetectedObjectTitle = (record: TDetectedObject): string => {
  return record.name?.toString() || String(record.id);
};
