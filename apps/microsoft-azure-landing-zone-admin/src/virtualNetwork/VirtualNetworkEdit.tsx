import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SecurityOperationsCenterTitle } from "../securityOperationsCenter/SecurityOperationsCenterTitle";
import { VirtualDesktopTitle } from "../virtualDesktop/VirtualDesktopTitle";

export const VirtualNetworkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="name" source="name" />
        <TextInput label="region" source="region" />
        <ReferenceArrayInput
          source="securityOperationsCenters"
          reference="SecurityOperationsCenter"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SecurityOperationsCenterTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="virtualDesktops"
          reference="VirtualDesktop"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VirtualDesktopTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
