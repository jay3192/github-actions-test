import React, { useState } from "react";
import PropTypes from "prop-types";
import RecipeList from "../recipe/RecipeList";

const Home = ({ getRecipes, recipes, getCurrent }) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    getRecipes(text);
    setText("");
  };

  return (
    <>
      <section>
        <h3>Search for Recipes</h3>
        <form className="search-form" onSubmit={submitHandler}>
          <input
            type="text"
            className="search-bar"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter any recipe..."
          />
          <button type="submit" className="search-button btn">
            Search
          </button>
        </form>
        <blockquote>
          Note: This search has a limit. 10 search/min only.
        </blockquote>
      </section>
      <RecipeList recipes={recipes} getCurrent={getCurrent} />
    </>
  );
};

Home.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.object.isRequired,
  getCurrent: PropTypes.func.isRequired,
};

export default Home;
