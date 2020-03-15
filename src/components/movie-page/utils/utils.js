const raitingMap = {
  BAD: { // 0-3
    maxScore: 3,
    name: `Bad`
  },
  NORMAL: { // 3-5
    maxScore: 5,
    name: `Normal`
  },
  GOOD: { // 5-8
    maxScore: 8,
    name: `Good`
  },
  VERY_GOOD: { // 8-9
    maxScore: 10,
    name: `Very Good`
  },
  AWESOME: { // 10+
    name: `Awesome`
  }
};

/**
 * @param {number} rating 0-10
 * @return {string}
 */
function getRaitinLevelTextByScoreRaiting(rating) {
  if (rating < raitingMap.BAD.maxScore) {
    return raitingMap.BAD.name;
  }
  if (rating < raitingMap.NORMAL.maxScore) {
    return raitingMap.NORMAL.name;
  }
  if (rating < raitingMap.GOOD.maxScore) {
    return raitingMap.GOOD.name;
  }
  if (rating < raitingMap.VERY_GOOD.maxScore) {
    return raitingMap.VERY_GOOD.name;
  }

  return raitingMap.AWESOME.name;
}

export {
  raitingMap,
  getRaitinLevelTextByScoreRaiting
};
