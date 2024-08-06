import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ObjectTitle } from "../object/ObjectTitle";

export const CountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Count" source="count" />
        <ReferenceInput source="object.id" reference="Object" label="Object">
          <SelectInput optionText={ObjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
