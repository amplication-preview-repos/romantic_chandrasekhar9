import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VIRTUALNETWORK_TITLE_FIELD } from "../virtualNetwork/VirtualNetworkTitle";

export const SecurityOperationsCenterList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SecurityOperationsCenters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="monitoringTools" source="monitoringTools" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="VirtualNetwork"
          source="virtualnetwork.id"
          reference="VirtualNetwork"
        >
          <TextField source={VIRTUALNETWORK_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
