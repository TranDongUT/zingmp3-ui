import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import publicRoutes from "./routes";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    document.body.dataset.theme = localStorage.getItem("theme");
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Page = route.component;
            let Layout = DefaultLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
