import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes: { count, hits }, getCurrent }) => (
  <section>
    <h5>Search Results</h5>
    {count === 0 && <h6 className="red-text">No Recipes found</h6>}

    <ul className="row">
      {hits &&
        hits.length !== 0 &&
        hits.map((recipe, index) => (
          <RecipeItem
            key={Math.floor(
              Math.random() * Math.random() + recipe.recipe.totalWeight + index
            )}
            recipe={recipe}
            getCurrent={getCurrent}
          />
        ))}
    </ul>
  </section>
);

RecipeList.propTypes = {
  recipes: PropTypes.object.isRequired,
  getCurrent: PropTypes.func.isRequired,
};

export default RecipeList;
