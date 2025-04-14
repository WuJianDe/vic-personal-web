import React from "react";
import "./i18n"; // 確保載入 i18n 初始化檔案
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/Routes";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, childIndex) => (
              <Route
                key={childIndex}
                index={child.index}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
};

export default App;
