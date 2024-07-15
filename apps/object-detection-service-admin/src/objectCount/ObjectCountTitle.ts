import { ObjectCount as TObjectCount } from "../api/objectCount/ObjectCount";

export const OBJECTCOUNT_TITLE_FIELD = "objectName";

export const ObjectCountTitle = (record: TObjectCount): string => {
  return record.objectName?.toString() || String(record.id);
};
