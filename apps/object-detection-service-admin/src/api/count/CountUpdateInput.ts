import { ObjectWhereUniqueInput } from "../object/ObjectWhereUniqueInput";

export type CountUpdateInput = {
  count?: number | null;
  object?: ObjectWhereUniqueInput | null;
};
