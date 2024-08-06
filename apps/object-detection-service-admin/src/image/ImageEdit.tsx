import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DetectedObjectTitle } from "../detectedObject/DetectedObjectTitle";
import { ObjectCountTitle } from "../objectCount/ObjectCountTitle";

export const ImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
