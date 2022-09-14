import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "./helpers/classNames";
import useTheme from "./hooks/useTheme";
import {About} from "./pages/about/async";
import {Main} from "./pages/main/async";

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