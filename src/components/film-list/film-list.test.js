import React from "react";
import renderer from "react-test-renderer";
import FilmList from "./film-list";

const mock = {
  films: [
    {name: `a`},
    {name: `b`},
    {name: `c`},
    {name: `d`},
    {name: `e`},
    {name: `f`}
  ]
};

it(`<FilmList /> shoult render correct`, () => {
  const tree = renderer
    .create(<FilmList
      films={mock.films}
    />);

  expect(tree).toMatchSnapshot();
})
;
