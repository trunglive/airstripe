export const convertedTime = timestamp => {
  const convertedFormat = new Date(timestamp * 1000);
  const date = convertedFormat.getDate();
  const month = convertedFormat.toLocaleString("en-us", {
    month: "short"
  });
  const year = convertedFormat
    .getFullYear()
    .toString()
    .substr(-2);

  const result = `${date} ${month} ${year}`;
  return result;
};
