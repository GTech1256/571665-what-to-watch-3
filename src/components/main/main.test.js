import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const mockData = {
  filmOnHeader: {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`
  },
  films: [
    {name: `a`},
    {name: `b`},
    {name: `c`},
    {name: `d`},
    {name: `e`},
    {name: `f`}
  ]
};

it(`<Main /> should render correct`, () => {
  const tree = renderer
    .create(<Main
      filmOnHeader={mockData.filmOnHeader}
      films={mockData.films}
      onFilmClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})
;
