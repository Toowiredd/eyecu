import { ImageWhereUniqueInput } from "../image/ImageWhereUniqueInput";

export type ObjectCountCreateInput = {
  count?: number | null;
  image?: ImageWhereUniqueInput | null;
  objectName?: string | null;
};
