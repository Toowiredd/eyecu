import { JsonValue } from "type-fest";
import { Image } from "../image/Image";

export type DetectedObject = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  confidenceScore: number | null;
  boundingBox: JsonValue;
  images?: Array<Image>;
  image?: Image | null;
};
