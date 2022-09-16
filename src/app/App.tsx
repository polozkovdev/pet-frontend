import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/theme";
import {classNames} from "shared/lib/classNames";
import About from "pages/about/ui";
import Main from "pages/main/ui";

const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames({
      cls: "app",
      additional: [theme],
    })}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;