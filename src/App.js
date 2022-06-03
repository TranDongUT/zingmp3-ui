import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import publicRoutes from "./routes";
function App() {
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
