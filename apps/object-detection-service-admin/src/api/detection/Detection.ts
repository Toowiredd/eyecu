import { Object } from "../object/Object";

export type Detection = {
  createdAt: Date;
  id: string;
  object?: Object | null;
  timestamp: Date | null;
  updatedAt: Date;
};
