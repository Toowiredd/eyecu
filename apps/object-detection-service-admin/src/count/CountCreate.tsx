import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ObjectTitle } from "../object/ObjectTitle";

export const CountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Count" source="count" />
        <ReferenceInput source="object.id" reference="Object" label="Object">
          <SelectInput optionText={ObjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
