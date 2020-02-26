import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`<App /> should render correct`, () => {
  const tree = renderer
    .create(<App
      filmOnHeader={mockData.filmOnHeader}
      films={mockData.films}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})
;
