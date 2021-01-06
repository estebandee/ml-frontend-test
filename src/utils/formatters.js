const formatPrice = (price) => {
  const removedDecimals = price.toString().split('.')[0];
  return `$ ${removedDecimals.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

const formatDescription = ({ description }) =>
  description.replace(/(?:\r\n|\r|\n)/g, '\n');

export { formatPrice, formatDescription };
