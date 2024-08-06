import { Count as TCount } from "../api/count/Count";

export const COUNT_TITLE_FIELD = "id";

export const CountTitle = (record: TCount): string => {
  return record.id?.toString() || String(record.id);
};
