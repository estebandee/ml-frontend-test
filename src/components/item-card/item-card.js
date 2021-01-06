import React from 'react';
import { useHistory } from 'react-router-dom';
import Freeshipping from '../../assets/ic_shipping.png';
import { formatPrice } from '../../utils/formatters';
import './item-card.scss';

const ItemCard = ({ item }) => {
  const history = useHistory();

  const goToItemDetails = (id) => {
    history.push(`/items/${id}`);
  };

  return (
    <div className="item-card">
      <div role="button" onClick={() => goToItemDetails(item.id)}>
        <img className="item-image" src={item.picture} alt={item.title} />
      </div>
      <div className="item-info">
        <div className="item-price-shipping">
          <div>
            <span className="item-price">{formatPrice(item.price.amount)}</span>
            {item.free_shipping && <img src={Freeshipping} alt="Envio Gratis" />}
          </div>
          <span className="item-location">{item.location.state_name}</span>
        </div>
        <a
          href="#"
          className="item-title"
          data-testid="item-title"
          onClick={() => goToItemDetails(item.id)}
        >
          {item.title}
        </a>
      </div>
    </div>
  );
};

export default ItemCard;
