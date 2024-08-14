import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VirtualNetworkList } from "./virtualNetwork/VirtualNetworkList";
import { VirtualNetworkCreate } from "./virtualNetwork/VirtualNetworkCreate";
import { VirtualNetworkEdit } from "./virtualNetwork/VirtualNetworkEdit";
import { VirtualNetworkShow } from "./virtualNetwork/VirtualNetworkShow";
import { VirtualDesktopList } from "./virtualDesktop/VirtualDesktopList";
import { VirtualDesktopCreate } from "./virtualDesktop/VirtualDesktopCreate";
import { VirtualDesktopEdit } from "./virtualDesktop/VirtualDesktopEdit";
import { VirtualDesktopShow } from "./virtualDesktop/VirtualDesktopShow";
import { SecurityOperationsCenterList } from "./securityOperationsCenter/SecurityOperationsCenterList";
import { SecurityOperationsCenterCreate } from "./securityOperationsCenter/SecurityOperationsCenterCreate";
import { SecurityOperationsCenterEdit } from "./securityOperationsCenter/SecurityOperationsCenterEdit";
import { SecurityOperationsCenterShow } from "./securityOperationsCenter/SecurityOperationsCenterShow";
import { PolicyList } from "./policy/PolicyList";
import { PolicyCreate } from "./policy/PolicyCreate";
import { PolicyEdit } from "./policy/PolicyEdit";
import { PolicyShow } from "./policy/PolicyShow";
import { DatabaseList } from "./database/DatabaseList";
import { DatabaseCreate } from "./database/DatabaseCreate";
import { DatabaseEdit } from "./database/DatabaseEdit";
import { DatabaseShow } from "./database/DatabaseShow";
import { StorageAccountList } from "./storageAccount/StorageAccountList";
import { StorageAccountCreate } from "./storageAccount/StorageAccountCreate";
import { StorageAccountEdit } from "./storageAccount/StorageAccountEdit";
import { StorageAccountShow } from "./storageAccount/StorageAccountShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MicrosoftAzureLandingZone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="VirtualNetwork"
          list={VirtualNetworkList}
          edit={VirtualNetworkEdit}
          create={VirtualNetworkCreate}
          show={VirtualNetworkShow}
        />
        <Resource
          name="VirtualDesktop"
          list={VirtualDesktopList}
          edit={VirtualDesktopEdit}
          create={VirtualDesktopCreate}
          show={VirtualDesktopShow}
        />
        <Resource
          name="SecurityOperationsCenter"
          list={SecurityOperationsCenterList}
          edit={SecurityOperationsCenterEdit}
          create={SecurityOperationsCenterCreate}
          show={SecurityOperationsCenterShow}
        />
        <Resource
          name="Policy"
          list={PolicyList}
          edit={PolicyEdit}
          create={PolicyCreate}
          show={PolicyShow}
        />
        <Resource
          name="Database"
          list={DatabaseList}
          edit={DatabaseEdit}
          create={DatabaseCreate}
          show={DatabaseShow}
        />
        <Resource
          name="StorageAccount"
          list={StorageAccountList}
          edit={StorageAccountEdit}
          create={StorageAccountCreate}
          show={StorageAccountShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
