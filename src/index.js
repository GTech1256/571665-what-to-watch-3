import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  filmOnHeader: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  },
  films: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]
};

ReactDOM.render(
    <App
      filmOnHeader={Settings.filmOnHeader}
      films={Settings.films}
    />,
    document.querySelector(`#root`)
);
