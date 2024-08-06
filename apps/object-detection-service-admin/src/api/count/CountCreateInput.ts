import { ObjectWhereUniqueInput } from "../object/ObjectWhereUniqueInput";

export type CountCreateInput = {
  count?: number | null;
  object?: ObjectWhereUniqueInput | null;
};
