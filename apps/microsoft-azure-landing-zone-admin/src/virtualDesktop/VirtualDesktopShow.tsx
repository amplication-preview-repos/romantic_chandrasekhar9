import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { VIRTUALNETWORK_TITLE_FIELD } from "../virtualNetwork/VirtualNetworkTitle";

export const VirtualDesktopShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
