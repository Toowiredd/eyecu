import { InputJsonValue } from "../../types";
import { ImageCreateNestedManyWithoutDetectedObjectsInput } from "./ImageCreateNestedManyWithoutDetectedObjectsInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type DetectedObjectCreateInput = {
  name?: string | null;
  confidenceScore?: number | null;
  boundingBox?: InputJsonValue;
  images?: ImageCreateNestedManyWithoutDetectedObjectsInput;
  image?: ImageWhereUniqueInput | null;
};
