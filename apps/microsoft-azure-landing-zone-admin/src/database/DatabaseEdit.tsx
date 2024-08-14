import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { StorageAccountTitle } from "../storageAccount/StorageAccountTitle";

export const DatabaseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
