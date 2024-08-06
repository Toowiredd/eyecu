import { SortOrder } from "../../util/SortOrder";

export type DetectedObjectOrderByInput = {
  boundingBox?: SortOrder;
  confidenceScore?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
