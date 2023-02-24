import React from "react";

const NotFound = () => {
  return (
    <div style={style}>
      <h1>Not Found</h1>
      <p>The page you are looking for does not exist..</p>
    </div>
  );
};

const style = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "80%",
  minHeight: "20rem",
  margin: "0 auto",
};

export default NotFound;
