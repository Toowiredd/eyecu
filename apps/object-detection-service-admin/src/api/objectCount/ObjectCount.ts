import { Image } from "../image/Image";

export type ObjectCount = {
  count: number | null;
  createdAt: Date;
  id: string;
  image?: Image | null;
  objectName: string | null;
  updatedAt: Date;
};
