import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { IMAGE_TITLE_FIELD } from "../image/ImageTitle";

export const ObjectCountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="count" source="count" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Image" source="image.id" reference="Image">
          <TextField source={IMAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="objectName" source="objectName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
