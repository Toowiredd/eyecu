import { Object as TObject } from "../api/object/Object";

export const OBJECT_TITLE_FIELD = "name";

export const ObjectTitle = (record: TObject): string => {
  return record.name?.toString() || String(record.id);
};
