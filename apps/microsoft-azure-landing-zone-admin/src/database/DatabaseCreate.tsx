import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { StorageAccountTitle } from "../storageAccount/StorageAccountTitle";

export const DatabaseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="dbType"
          label="dbType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="storageAccount.id"
          reference="StorageAccount"
          label="StorageAccount"
        >
          <SelectInput optionText={StorageAccountTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
