import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const Settings = {
  filmOnHeader: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  },
};

ReactDOM.render(
    <App
      filmOnHeader={Settings.filmOnHeader}
      films={films}
    />,
    document.querySelector(`#root`)
);
