import { Route, Routes } from "react-router-dom";
import {routes} from "./routes";

function App() {
  return (
    <>
    <Routes>
    {routes.map((route) => {
          const { path, Component} = route;

          return (
            <Route key={path} path={path} element={<Component />}></Route>
          );
        })}
    </Routes>
    </>
  );
}

export default App;
