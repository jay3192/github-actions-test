import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min";
import "./App.css";

import NavBar from "./components/common/NavBar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Recipe from "./components/recipe/Recipe";
import NotFound from "./components/common/NotFound";

const fetchUrl = process.env.REACT_APP_FETCH_URL || "http://localhost:3001";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, []);

  const [recipes, setRecipes] = useState({});
  const [current, setCurrent] = useState({});

  const getRecipes = async (text) => {
    try {
      const res = await fetch(`${fetchUrl}/recipies?q=${text}`);

      const data = await res.json();

      if (Object.hasOwn(data, "count") && Object.hasOwn(data, "hits")) {
        setRecipes(data);
        console.log(data);
      } else if (Object.hasOwn(data, "error")) {
        throw new Error(data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getCurrent = (obj) => {
    setCurrent(obj);
  };

  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  recipes={recipes}
                  getCurrent={getCurrent}
                  getRecipes={getRecipes}
                />
              }
            />
            <Route path="recipe/:name" element={<Recipe current={current} />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
