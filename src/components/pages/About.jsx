import React from "react";

const About = () => {
  return (
    <section>
      <h4>About This App</h4>
      <p>App to search recipes</p>
      <p>Version 1.0.0</p>
      <h6>
        <span className="black-text">Note: </span>{" "}
        <span className="red-text">
          This API limits it to 10 calls per minute. Exceeding that limit may
          result in errors!
        </span>
      </h6>
    </section>
  );
};

export default About;
