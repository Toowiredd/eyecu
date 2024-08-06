import { ObjectWhereUniqueInput } from "../object/ObjectWhereUniqueInput";

export type DetectionCreateInput = {
  object?: ObjectWhereUniqueInput | null;
  timestamp?: Date | null;
};
