import { InputJsonValue } from "../../types";
import { ImageUpdateManyWithoutDetectedObjectsInput } from "./ImageUpdateManyWithoutDetectedObjectsInput";
import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type DetectedObjectUpdateInput = {
  name?: string | null;
  confidenceScore?: number | null;
  boundingBox?: InputJsonValue;
  images?: ImageUpdateManyWithoutDetectedObjectsInput;
  image?: ImageWhereUniqueInput | null;
};
