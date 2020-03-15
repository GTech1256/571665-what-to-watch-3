import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";
import Tab from "../tab/tab.jsx";


const mock = {
  titles: [`1`, `2`, `3`],
  childrens: [
    <p key="1">1</p>,
    <p key="2">2</p>,
    <p key="3">3</p>,
  ]
};

it(`<Tabs /> shoult render correct`, () => {
  const tree = renderer.create(
      <Tabs>
        {mock.titles.map((it, idx) => (
          <Tab key={it} title={it}>
            {mock.childrens[idx]}
          </Tab>
        ))}
      </Tabs>
  );

  expect(tree).toMatchSnapshot();
});
