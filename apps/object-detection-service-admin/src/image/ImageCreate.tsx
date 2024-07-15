import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DetectedObjectTitle } from "../detectedObject/DetectedObjectTitle";
import { ObjectCountTitle } from "../objectCount/ObjectCountTitle";

export const ImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="url" source="url" />
        <ReferenceInput
          source="detectedObject.id"
          reference="DetectedObject"
          label="DetectedObject"
        >
          <SelectInput optionText={DetectedObjectTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="detectedObjects"
          reference="DetectedObject"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DetectedObjectTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="objectCounts"
          reference="ObjectCount"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ObjectCountTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
