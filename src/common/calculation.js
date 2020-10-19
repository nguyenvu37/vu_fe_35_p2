export const getSummary = (arr) => {
  return arr
    .map(
      (item) =>
        parseInt(item.quantity) *
        Math.floor(item.price * ((100 - item.discount) / 100))
    )
    .reduce((a, b) => a + b, 0);
};

export const getTotal = (data, quantity) => {
  return (
    Math.floor(data.price * ((100 - data.discount) / 100)) * parseInt(quantity)
  );
};

export const getPrice = (data) => {
  return Math.floor(data.price * ((100 - data.discount) / 100));
};

export const getQuantity = (arr) => {
  return arr.map((item) => item.quantity).reduce((a, b) => a + b, 0);
};

export const getKeywordText = (str) => {
  return str
    .toUpperCase()
    .split(" ")
    .filter((x) => x !== "")
    .join("");
};

export const getKeywordId = (str) => {
  return str
    .toUpperCase()
    .split("-")
    .filter((x) => x !== "-")
    .join("");
};

export function formCurencyVN(price) {
  return price.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
}
