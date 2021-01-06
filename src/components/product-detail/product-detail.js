import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from 'react-helmet';
import Spinner from '../spinner/spinner';
import BreadCrumbList from '../breadcrumb-list/breadcrumb-list';
import { fetchItemDetails } from '../../store/actions/detail-actions';
import { formatPrice, formatDescription } from '../../utils/formatters';
import './product-detail.scss';

const ProductDetail = () => {
  const details = useSelector((state) => state.details.details);
  const categories = useSelector((state) => state.details.categories);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      dispatch(fetchItemDetails(id));
    };
    getDetails();
  }, [id, dispatch]);

  return !details ? (
    <Spinner />
  ) : (
    <>
      <BreadCrumbList categories={categories} />

      <section className="product-detail col-10">
        <Helmet>
          <title>{details.title} - MercadoLibre</title>
          <meta name="description" content={details.description} />
          <meta name="og:title" content={`MercadoLibre - ${details.title}`} />
        </Helmet>

        <div className="product-info">
          <figure>
            <img
              className="product-info-image"
              src={details.picture_hq}
              alt={details.title}
            />
          </figure>
          <div>
            <div className="condition-info">
              {details.condition === 'new' ? 'Nuevo' : 'Usado'} - {details.sold_quantity}{' '}
              Vendidos
            </div>
            <p className="product-name">{details.title}</p>
            <p className="product-price">{formatPrice(details.price.amount)}</p>
            <button type="button" className="btn-comprar">
              Comprar
            </button>
          </div>
        </div>
        <h3 className="description-title">Descripcion del producto</h3>
        <div className="product-description" data-testid="product-description">
          {formatDescription(details)}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
