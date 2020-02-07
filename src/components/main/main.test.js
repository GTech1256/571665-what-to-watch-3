import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const mockData = {
  filmOnHeader: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  },
  films: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]
};

it(`<Main /> should render correct`, () => {
  const tree = renderer
    .create(<Main
      filmOnHeader={mockData.filmOnHeader}
      films={mockData.films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})
;
