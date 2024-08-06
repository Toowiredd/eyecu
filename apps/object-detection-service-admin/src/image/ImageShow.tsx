import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { IMAGE_TITLE_FIELD } from "./ImageTitle";
import { DETECTEDOBJECT_TITLE_FIELD } from "../detectedObject/DetectedObjectTitle";

export const ImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="DetectedObject"
          source="detectedobject.id"
          reference="DetectedObject"
        >
          <TextField source={DETECTEDOBJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <ReferenceManyField
          reference="DetectedObject"
          target="imageId"
          label="DetectedObjects"
        >
          <Datagrid rowClick="show">
            <TextField label="boundingBox" source="boundingBox" />
            <TextField label="confidenceScore" source="confidenceScore" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Image" source="image.id" reference="Image">
              <TextField source={IMAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ObjectCount"
          target="imageId"
          label="ObjectCounts"
        >
          <Datagrid rowClick="show">
            <TextField label="count" source="count" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Image" source="image.id" reference="Image">
              <TextField source={IMAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="objectName" source="objectName" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
