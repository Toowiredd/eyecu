import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ImageTitle } from "../image/ImageTitle";

export const DetectedObjectCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput label="confidenceScore" source="confidenceScore" />
        <div />
        <ReferenceArrayInput
          source="images"
          reference="Image"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImageTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="image.id" reference="Image" label="Image">
          <SelectInput optionText={ImageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
