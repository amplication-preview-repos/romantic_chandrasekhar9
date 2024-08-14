import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { VirtualNetworkTitle } from "../virtualNetwork/VirtualNetworkTitle";

export const VirtualDesktopEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
