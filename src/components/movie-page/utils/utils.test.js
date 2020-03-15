import {getRaitinLevelTextByScoreRaiting, raitingMap} from "./utils";

describe(`The function returns the correct rating representation`, () => {
  it(`0 like 'Bad'`, () => {
    const expectRaitingText = raitingMap.BAD.name;
    const raiting = 0;

    expect(getRaitinLevelTextByScoreRaiting(raiting))
      .toBe(expectRaitingText);
  });
  it(`2 like 'Bad'`, () => {
    const expectRaitingText = raitingMap.BAD.name;
    const raiting = 2;

    expect(getRaitinLevelTextByScoreRaiting(raiting))
      .toBe(expectRaitingText);
  });

  it(`3 like 'Normal'`, () => {
    const expectRaitingText = raitingMap.NORMAL.name;
    const raiting = 3;

    expect(getRaitinLevelTextByScoreRaiting(raiting))
      .toBe(expectRaitingText);
  });

  it(`5 like 'Good'`, () => {
    const expectRaitingText = raitingMap.GOOD.name;
    const raiting = 5;

    expect(getRaitinLevelTextByScoreRaiting(raiting))
      .toBe(expectRaitingText);
  });

  it(`8 like 'Very Good'`, () => {
    const expectRaitingText = raitingMap.VERY_GOOD.name;
    const raiting = 8;

    expect(getRaitinLevelTextByScoreRaiting(raiting))
      .toBe(expectRaitingText);
  });

  it(`9.999 like 'Very Good'`, () => {
    const expectRaitingText = raitingMap.VERY_GOOD.name;
    const raiting = 9.999;

    expect(getRaitinLevelTextByScoreRaiting(raiting))
      .toBe(expectRaitingText);
  });

  it(`10 like 'Awesome'`, () => {
    const expectRaitingText = raitingMap.AWESOME.name;
    const raiting = 10;

    expect(getRaitinLevelTextByScoreRaiting(raiting))
      .toBe(expectRaitingText);
  });

  it(`20 like 'Awesome'`, () => {
    const expectRaitingText = raitingMap.AWESOME.name;
    const raiting = 10;

    expect(getRaitinLevelTextByScoreRaiting(raiting))
      .toBe(expectRaitingText);
  });
});
