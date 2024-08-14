import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VirtualNetworkTitle } from "../virtualNetwork/VirtualNetworkTitle";

export const SecurityOperationsCenterEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="monitoringTools"
          source="monitoringTools"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="name" source="name" />
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
