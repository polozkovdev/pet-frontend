import AppRoutes from "app/providers/routes/ui/AppRoutes";
import { useTheme } from "app/providers/theme";
import React, { Suspense } from "react";
import { classNames } from "shared/lib/classNames";
import { Navigation } from "widgets/navigation";
import { Sidebar } from "widgets/sidebar";

import "shared/config/i18n";

const App = () => {
  const { theme } = useTheme();
  return (
    <div
      className={classNames({
        cls: "app",
        additional: [theme],
      })}
    >
      <Suspense fallback="en">
        <Navigation />
        <div className="wrapper">
          <Sidebar />
          <AppRoutes />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
