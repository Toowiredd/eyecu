import { Object } from "../object/Object";

export type Count = {
  count: number | null;
  createdAt: Date;
  id: string;
  object?: Object | null;
  updatedAt: Date;
};
