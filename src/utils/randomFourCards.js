export const randomFourCards = (arr, id) => {
  const newArr = arr.filter(item => item.id !== id);

  const arrIndexes = [];
  const result = [];

  for (let i = 0; i < newArr.length; i++) {
    arrIndexes.push(i);
  }

  arrIndexes.sort((x, y) => Math.floor(Math.random() * 3) - 1);

  for (let i = 0; i < 4; i++) {
    result.push(newArr[arrIndexes.shift()]);
  }

  return result;
};
