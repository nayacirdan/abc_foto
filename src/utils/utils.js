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

export const formFilterStringFragment = (filterParam, filterValue, currentFilterString) => {
  const addedString = '';
  /* if(currentFilterString.includes(filterParam)){

  } */
  return `${currentFilterString}&${addedString}`;
};

export const addFilterQuery = (queryFiltersObj, filterParam, filterValue) => {
  const newQueriesObj = {};

  if (Object.prototype.hasOwnProperty.call(queryFiltersObj, filterParam)) {
    if (queryFiltersObj[filterParam].constructor === Array) {
      queryFiltersObj[filterParam].push(filterValue);
      return queryFiltersObj;
    } else if (
      queryFiltersObj[filterParam].constructor === String &&
        queryFiltersObj[filterParam].length
    ) {
      const strToArr = queryFiltersObj[filterParam].split();
      strToArr.push(filterValue);
      return {...queryFiltersObj, [filterParam]: strToArr};
    }
  } else {
    queryFiltersObj[filterParam] = filterValue;
    return queryFiltersObj;
  }
};

export const deleteFilterQuery = (
  queryFiltersObj,
  filterParam,
  filterValue
) => {
  debugger;
  if (queryFiltersObj[filterParam].constructor === Array) {
    const index = queryFiltersObj[filterParam].indexOf(filterValue);
    queryFiltersObj[filterParam].splice(index, 1);
    return { ...queryFiltersObj, [filterParam]: queryFiltersObj[filterParam]};
  } else if (
    queryFiltersObj[filterParam].constructor === String &&
      queryFiltersObj[filterParam] === filterValue
  ) {
    delete queryFiltersObj[filterParam];
    return queryFiltersObj;
  }
  return 'no IF triggered';
};

export const changeStandartQuery = (currentQueryObj, queryName, queryValue) => {
  currentQueryObj[queryName] = queryValue;
  return currentQueryObj;
};

export const findPrices = (productsArr) => {
  productsArr.sort((a, b) => a.currentPrice - b.currentPrice);
  return [productsArr[0].currentPrice, productsArr[productsArr.length - 1].currentPrice];
};