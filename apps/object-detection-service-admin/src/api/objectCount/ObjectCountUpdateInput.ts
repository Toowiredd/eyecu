import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ObjectCountUpdateInput = {
  count?: number | null;
  image?: ImageWhereUniqueInput | null;
  objectName?: string | null;
};
