import React from "react";
import renderer from "react-test-renderer";
import FilmList from "./film-list";

const mock = {
  films: [
    `a`,
    `b`,
    `c`,
    `d`,
    `e`,
    `f`
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
