import { SortOrder } from "../../util/SortOrder";

export type ObjectCountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  objectName?: SortOrder;
  count?: SortOrder;
  imageId?: SortOrder;
};
