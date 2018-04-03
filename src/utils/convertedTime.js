export const convertedDate = timestamp => {
  const convertedFormat = new Date(timestamp);
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

export const convertedHour = timestamp => {
  const convertedFormat = new Date(timestamp);
  const hour = convertedFormat.toLocaleTimeString();
  const result = hour.slice(0, -6) + hour.slice(-3);
  return result;
};

export const convertedDateAndHour = timestamp => {
  return convertedDate(timestamp) + " - " + convertedHour(timestamp);
};

export const daysToGo = timestamp => {
  return Math.floor((timestamp - new Date().getTime()) / 1000 / 60 / 60 / 24);
};

export const expiredDate = timestamp => {
  const convertedFormat = new Date(timestamp - 14 * 24 * 60 * 60 * 1000);
  const date = convertedFormat.getDate();
  const month = convertedFormat.toLocaleString("en-us", {
    month: "long"
  });
  const year = convertedFormat.getFullYear();
  const result = `${month} ${date}, ${year}`;
  return result;
};
