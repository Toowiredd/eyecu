import { ObjectWhereUniqueInput } from "../object/ObjectWhereUniqueInput";

export type DetectionUpdateInput = {
  object?: ObjectWhereUniqueInput | null;
  timestamp?: Date | null;
};
