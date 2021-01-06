const getAuthor = require('./common');

class Items {
  constructor(items) {
    this.author = getAuthor();
    this.categories = this.getCategories(items.filters);

    this.items = items.results.slice(0, 4).map((item) => {
      const [amount, decimals] = item.price.toString().split('.');
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount,
          decimals,
        },
        location: {
          state_name: item.address.state_name,
          state_id: item.address.state_id,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      };
    });
  }

  getCategories(filters) {
    const categories = filters.filter((filter) => filter.id === 'category');
    return (
      categories[0] &&
      categories[0].values[0].path_from_root.map((category) => category.name)
    );
  }
}

module.exports = Items;
