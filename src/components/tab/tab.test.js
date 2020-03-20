import React from "react";
import renderer from "react-test-renderer";
import Tab from "./tab";

const mock = {
  title: `title`,
  isActive: true,
  onClick: () => {}
};

it(`<Tab /> shoult render correct`, () => {
  const tree = renderer.create(
      <Tab {...mock} />
  );

  expect(tree).toMatchSnapshot();
});
