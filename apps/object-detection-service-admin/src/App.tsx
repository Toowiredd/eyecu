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
import { DetectionList } from "./detection/DetectionList";
import { DetectionCreate } from "./detection/DetectionCreate";
import { DetectionEdit } from "./detection/DetectionEdit";
import { DetectionShow } from "./detection/DetectionShow";
import { ObjectList } from "./object/ObjectList";
import { ObjectCreate } from "./object/ObjectCreate";
import { ObjectEdit } from "./object/ObjectEdit";
import { ObjectShow } from "./object/ObjectShow";
import { CountList } from "./count/CountList";
import { CountCreate } from "./count/CountCreate";
import { CountEdit } from "./count/CountEdit";
import { CountShow } from "./count/CountShow";
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
        <Resource
          name="Detection"
          list={DetectionList}
          edit={DetectionEdit}
          create={DetectionCreate}
          show={DetectionShow}
        />
        <Resource
          name="Object"
          list={ObjectList}
          edit={ObjectEdit}
          create={ObjectCreate}
          show={ObjectShow}
        />
        <Resource
          name="Count"
          list={CountList}
          edit={CountEdit}
          create={CountCreate}
          show={CountShow}
        />
      </Admin>
    </div>
  );
};

export default App;
