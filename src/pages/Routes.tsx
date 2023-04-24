import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import MainContainer from "../containers/mainContainer";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<MainContainer />} />
    </ReactRouterRoutes>
  );
};
