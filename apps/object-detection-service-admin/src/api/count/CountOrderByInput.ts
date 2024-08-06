import { SortOrder } from "../../util/SortOrder";

export type CountOrderByInput = {
  count?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  objectId?: SortOrder;
  updatedAt?: SortOrder;
};
