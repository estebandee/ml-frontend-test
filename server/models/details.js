const getAuthor = require('./common');

class Details {
  constructor(details, description, categories) {
    this.categories = categories.path_from_root.map((cat) => cat.name);
    this.author = getAuthor();
    const [amount, decimals] = details.price.toString().split('.');
    this.details = {
      id: details.id,
      title: details.title,
      price: {
        currency: details.currency_id,
        amount,
        decimals,
      },
      picture: details.thumbnail,
      picture_hq: details.pictures[0] && details.pictures[0].url,
      condition: details.condition,
      free_shipping: details.shipping.free_shipping,
      sold_quantity: details.sold_quantity,
      description: description.plain_text,
    };
  }
}

module.exports = Details;
