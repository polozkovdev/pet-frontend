import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTERS_CONFIG } from "shared/config/routers";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {ROUTERS_CONFIG.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
