import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { ObjectTitle } from "../object/ObjectTitle";

export const DetectionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="object.id" reference="Object" label="Object">
          <SelectInput optionText={ObjectTitle} />
        </ReferenceInput>
        <DateTimeInput label="Timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
