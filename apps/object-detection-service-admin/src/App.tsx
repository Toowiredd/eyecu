import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ImageList } from "./image/ImageList";
import { ImageCreate } from "./image/ImageCreate";
import { ImageEdit } from "./image/ImageEdit";
import { ImageShow } from "./image/ImageShow";
import { DetectedObjectList } from "./detectedObject/DetectedObjectList";
import { DetectedObjectCreate } from "./detectedObject/DetectedObjectCreate";
import { DetectedObjectEdit } from "./detectedObject/DetectedObjectEdit";
import { DetectedObjectShow } from "./detectedObject/DetectedObjectShow";
import { ObjectCountList } from "./objectCount/ObjectCountList";
import { ObjectCountCreate } from "./objectCount/ObjectCountCreate";
import { ObjectCountEdit } from "./objectCount/ObjectCountEdit";
import { ObjectCountShow } from "./objectCount/ObjectCountShow";
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
        title={"ObjectDetectionService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Image"
          list={ImageList}
          edit={ImageEdit}
          create={ImageCreate}
          show={ImageShow}
        />
        <Resource
          name="DetectedObject"
          list={DetectedObjectList}
          edit={DetectedObjectEdit}
          create={DetectedObjectCreate}
          show={DetectedObjectShow}
        />
        <Resource
          name="ObjectCount"
          list={ObjectCountList}
          edit={ObjectCountEdit}
          create={ObjectCountCreate}
          show={ObjectCountShow}
        />
      </Admin>
    </div>
  );
};

export default App;
