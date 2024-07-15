import { ObjectCountWhereInput } from "./ObjectCountWhereInput";
import { ObjectCountOrderByInput } from "./ObjectCountOrderByInput";

export type ObjectCountFindManyArgs = {
  where?: ObjectCountWhereInput;
  orderBy?: Array<ObjectCountOrderByInput>;
  skip?: number;
  take?: number;
};
