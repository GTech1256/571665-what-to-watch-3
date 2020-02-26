import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";
import {BrowserRouter} from "react-router-dom";

const Settings = {
  filmOnHeader: films[0],
};

ReactDOM.render(
    <BrowserRouter>
      <App
        filmOnHeader={Settings.filmOnHeader}
        films={films}
      />
    </BrowserRouter>,
    document.querySelector(`#root`)
);
