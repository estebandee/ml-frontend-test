const axios = require('axios');

const Items = require('../models/items');
const Details = require('../models/details');

const BASE_URL = 'https://api.mercadolibre.com';

class ItemsController {
  async getItemList(req, res) {
    const query = req.query.q;
    const searchURL = `${BASE_URL}/sites/MLA/search?q=${query}`;

    try {
      const response = await axios.get(searchURL);
      const modeledData = new Items(response.data);
      res.json(modeledData);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  }

  async getItemDetails(req, res) {
    const { id } = req.params;

    const itemsURL = `${BASE_URL}/items`;
    const categoriesURL = `${BASE_URL}/categories`;

    const detailsReq = axios.get(`${itemsURL}/${id}`);
    const descriptionReq = axios.get(`${itemsURL}/${id}/description`);

    try {
      const [detailsResponse, descriptionResponse] = await Promise.all([
        detailsReq,
        descriptionReq,
      ]);
      const { category_id } = detailsResponse.data;
      const categoryReq = axios.get(`${categoriesURL}/${category_id}`);
      const categoryResponse = await categoryReq;
      const modeledData = new Details(
        detailsResponse.data,
        descriptionResponse.data,
        categoryResponse.data,
      );
      res.json(modeledData);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  }
}

module.exports = new ItemsController();
