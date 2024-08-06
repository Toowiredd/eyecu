import { InputJsonValue } from "../../types";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";
import { ImageUpdateManyWithoutDetectedObjectsInput } from "./ImageUpdateManyWithoutDetectedObjectsInput";

export type DetectedObjectUpdateInput = {
  boundingBox?: InputJsonValue;
  confidenceScore?: number | null;
  image?: ImageWhereUniqueInput | null;
  images?: ImageUpdateManyWithoutDetectedObjectsInput;
  name?: string | null;
};
