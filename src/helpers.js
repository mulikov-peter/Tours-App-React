export const margeArrayObj = (arr1, arr2) =>
  arr1.map((el, i) => Object.assign({}, el, arr2[i]));
