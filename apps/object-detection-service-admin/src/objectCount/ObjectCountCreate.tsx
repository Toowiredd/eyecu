import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ImageTitle } from "../image/ImageTitle";

export const ObjectCountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="objectName" source="objectName" />
        <NumberInput step={1} label="count" source="count" />
        <ReferenceInput source="image.id" reference="Image" label="Image">
          <SelectInput optionText={ImageTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
