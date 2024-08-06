import { CountWhereInput } from "./CountWhereInput";
import { CountOrderByInput } from "./CountOrderByInput";

export type CountFindManyArgs = {
  where?: CountWhereInput;
  orderBy?: Array<CountOrderByInput>;
  skip?: number;
  take?: number;
};
