import React from "react";
import LoaderStyle from "./LoaderStyle";

function Loader() {
  return (
    <LoaderStyle>
      <div className="cont_spinner">
        <span className="loader"></span>
        <h1>جـامــعــة الـمـنـوفـيـة</h1>
      </div>
    </LoaderStyle>
  );
}

export default Loader;
