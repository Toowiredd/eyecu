import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DETECTEDOBJECT_TITLE_FIELD } from "../detectedObject/DetectedObjectTitle";

export const ImageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Images"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
