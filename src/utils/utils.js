const filterObj = {
  filterParam: 'type',
  hhh: 'osdkfosd'
};

const products = [
  {
    type: 'dsl',
    ammount: 2
  },
  {
    type: 'dsl',
    ammount: 4
  },
  {
    type: 'inst',
    ammount: 0
  }
];

const uniqueArray = (arr) => {
  return Array.from(new Set(arr));
};

const myFunc = (arr, param) => {
  const someArr = [];
  arr.forEach(el => {
    for (const key in el) {
      if (key === param) {
        someArr.push(el[key]);
      }
    }
  });
  return someArr;
};

export const findFilterOptions = (arr, param) => {
  return uniqueArray(myFunc(arr, param));
};
