import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Recipe = ({ current }) => {
  const empty = Object.keys(current).length === 0;

  return (
    <section>
      <div className="row">
        <div className="col s12 my-2">
          <Link to="/" className="btn blue-grey darken-2">
            Back to Home
          </Link>
        </div>
        {empty && (
          <div className="col s12">
            <h5 className="red-text">
              You have refreshed the page or accessed this url directly. Please
              go back to home.
            </h5>
          </div>
        )}
        {!empty && (
          <Fragment>
            <div className="col s12">
              <h3>{current.label}</h3>
            </div>
            <div className="col s12 m6 l4">
              <img
                src={current.image}
                className="responsive-img"
                alt={current.label}
              />
            </div>
            <div className="col s12 m6 l5">
              <table className="recipe-table">
                <tbody>
                  <tr>
                    <td>
                      <b>Cuisine</b>
                    </td>
                    <td>
                      <b>{current.cuisineType.toString()}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Meal Type</b>
                    </td>
                    <td>
                      <b>{current.mealType.toString()}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Diet</b>
                    </td>
                    <td>
                      <b>
                        {current.dietLabels.length === 0
                          ? "-"
                          : current.dietLabels.toString()}
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Calories</b>
                    </td>
                    <td>
                      <b>{Math.floor(current.calories)}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Servings</b>
                    </td>
                    <td>
                      <b>{current.yield}</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Total Time</b>
                    </td>
                    <td>
                      <b>
                        {current.totalTime === 0
                          ? "-"
                          : `${current.totalTime} mins`}
                      </b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Fragment>
        )}
      </div>
      {!empty && (
        <div className="row">
          <div className="col s12 l6">
            <h5>Ingredients</h5>
            <ul className="collection" id="recipe-ingredients">
              {current.ingredientLines.length !== 0 &&
                current.ingredientLines.map((item, index) => (
                  <li key={index} className="collection-item">
                    {item}
                  </li>
                ))}
            </ul>
          </div>
          <div className="col s12 l6">
            <h5>Directions</h5>
            <a
              href={current.url}
              className="btn recipe-btn"
              target="_blank"
              rel="noreferrer"
            >
              See directions on {current.source}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

Recipe.propTypes = {
  current: PropTypes.object,
};

export default Recipe;
