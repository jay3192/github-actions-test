import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RecipeItem = ({ recipe: { recipe }, getCurrent }) => {
  const clickHandler = () => {
    getCurrent(recipe);
  };

  return (
    <li className="col s12 m4 l3 recipe-item">
      <Link
        to={`/github-actions-test/recipe/${recipe.label
          .replaceAll(" ", "-")
          .toLowerCase()}`}
      >
        <div
          className="card"
          role="link"
          tabIndex={-1}
          onClick={clickHandler}
          onKeyUp={clickHandler}
        >
          <div className="card-image">
            <img
              src={recipe.image}
              className="responsive-img"
              alt={recipe.label}
            />
          </div>
          <div className="card-content">
            <span className="card-title">
              <h6 className="black-text">{recipe.label}</h6>
            </span>

            <table className="item-table">
              <tbody>
                <tr>
                  <td className="blue-grey-text text-darken-1">Type </td>
                  <td className="blue-grey-text text-darken-1">
                    {recipe.mealType.join(", ")}
                  </td>
                </tr>
                <tr>
                  <td className="blue-grey-text text-darken-1">Calories </td>
                  <td className="blue-grey-text text-darken-1">
                    {Math.floor(recipe.calories)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Link>
    </li>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  getCurrent: PropTypes.func.isRequired,
};

export default RecipeItem;
