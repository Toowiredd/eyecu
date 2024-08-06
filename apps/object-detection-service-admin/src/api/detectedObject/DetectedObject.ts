import { JsonValue } from "type-fest";
import { Image } from "../image/Image";

export type DetectedObject = {
  boundingBox: JsonValue;
  confidenceScore: number | null;
  createdAt: Date;
  id: string;
  image?: Image | null;
  images?: Array<Image>;
  name: string | null;
  updatedAt: Date;
};
