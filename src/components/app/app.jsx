import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {mainFilm: {name, genre, releaseDate}} = props;

  return (
    <Main
      filmName={name}
      filmGenre={genre}
      filmReleaseDate={releaseDate} />
  );
};


export default App;
