import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { ImageCreateNestedManyWithoutDetectedObjectsInput } from "./ImageCreateNestedManyWithoutDetectedObjectsInput";

export type DetectedObjectCreateInput = {
  boundingBox?: InputJsonValue;
  confidenceScore?: number | null;
  image?: ImageWhereUniqueInput | null;
  images?: ImageCreateNestedManyWithoutDetectedObjectsInput;
  name?: string | null;
};
