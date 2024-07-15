import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ObjectCountUpdateInput = {
  objectName?: string | null;
  count?: number | null;
  image?: ImageWhereUniqueInput | null;
};
