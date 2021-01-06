import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import Helmet from 'react-helmet';
import ItemCard from '../item-card/item-card';
import Spinner from '../spinner/spinner';
import BreadCrumbList from '../breadcrumb-list/breadcrumb-list';
import { fetchItemList } from '../../store/actions/search-actions';
import './search-results.scss';

const SearchResults = () => {
  const items = useSelector((state) => state.search.items);
  const categories = useSelector((state) => state.search.categories);
  const { search } = useLocation();
  const dispatch = useDispatch();
  const query = queryString.parse(search).search;

  useEffect(() => {
    const getItems = async () => {
      dispatch(fetchItemList(query));
    };
    getItems();
  }, [search, dispatch, query]);

  return !items ? (
    <Spinner />
  ) : (
    <>
      <Helmet>
        <title>{query} - MercadoLibre</title>
        <meta name="description" content={categories && categories.join(', ')} />
        <meta name="og:title" content={`${query} - MercadoLibre`} />
      </Helmet>

      <BreadCrumbList categories={categories} />
      <section className="search-results col-10">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </section>
    </>
  );
};

export default SearchResults;
