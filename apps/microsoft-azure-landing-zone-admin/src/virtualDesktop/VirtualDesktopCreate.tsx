import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { VirtualNetworkTitle } from "../virtualNetwork/VirtualNetworkTitle";

export const VirtualDesktopCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <SelectInput
          source="osType"
          label="osType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="virtualNetwork.id"
          reference="VirtualNetwork"
          label="VirtualNetwork"
        >
          <SelectInput optionText={VirtualNetworkTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
