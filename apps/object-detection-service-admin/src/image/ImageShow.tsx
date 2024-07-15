import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { IMAGE_TITLE_FIELD } from "./ImageTitle";
import { DETECTEDOBJECT_TITLE_FIELD } from "../detectedObject/DetectedObjectTitle";

export const ImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <ReferenceField
          label="DetectedObject"
          source="detectedobject.id"
          reference="DetectedObject"
        >
          <TextField source={DETECTEDOBJECT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="DetectedObject"
          target="imageId"
          label="DetectedObjects"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="confidenceScore" source="confidenceScore" />
            <TextField label="boundingBox" source="boundingBox" />
            <ReferenceField label="Image" source="image.id" reference="Image">
              <TextField source={IMAGE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ObjectCount"
          target="imageId"
          label="ObjectCounts"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="objectName" source="objectName" />
            <TextField label="count" source="count" />
            <ReferenceField label="Image" source="image.id" reference="Image">
              <TextField source={IMAGE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
