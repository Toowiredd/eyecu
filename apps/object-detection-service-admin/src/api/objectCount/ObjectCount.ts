import { Image } from "../image/Image";

export type ObjectCount = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  objectName: string | null;
  count: number | null;
  image?: Image | null;
};
