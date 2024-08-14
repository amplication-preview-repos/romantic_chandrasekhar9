import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SecurityOperationsCenterTitle } from "../securityOperationsCenter/SecurityOperationsCenterTitle";
import { VirtualDesktopTitle } from "../virtualDesktop/VirtualDesktopTitle";

export const VirtualNetworkCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
