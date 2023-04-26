import { Route, Routes as ReactRouterRoutes } from "react-router-dom";
import Main from "../components/Main";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Main />} />
    </ReactRouterRoutes>
  );
};
