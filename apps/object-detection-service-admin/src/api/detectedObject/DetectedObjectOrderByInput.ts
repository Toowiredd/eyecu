import { SortOrder } from "../../util/SortOrder";

export type DetectedObjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  confidenceScore?: SortOrder;
  boundingBox?: SortOrder;
  imageId?: SortOrder;
};
