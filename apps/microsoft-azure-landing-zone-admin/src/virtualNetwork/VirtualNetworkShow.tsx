import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { VIRTUALNETWORK_TITLE_FIELD } from "./VirtualNetworkTitle";

export const VirtualNetworkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="addressSpace" source="addressSpace" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="region" source="region" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SecurityOperationsCenter"
          target="virtualNetworkId"
          label="SecurityOperationsCenters"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="VirtualDesktop"
          target="virtualNetworkId"
          label="VirtualDesktops"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="osType" source="osType" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="VirtualNetwork"
              source="virtualnetwork.id"
              reference="VirtualNetwork"
            >
              <TextField source={VIRTUALNETWORK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
