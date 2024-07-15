import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ObjectCountCreateInput = {
  objectName?: string | null;
  count?: number | null;
  image?: ImageWhereUniqueInput | null;
};
