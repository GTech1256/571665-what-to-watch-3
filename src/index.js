import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  mainFilm: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  }
};

ReactDOM.render(
    <App mainFilm={Settings.mainFilm} />,
    document.querySelector(`#root`)
);
