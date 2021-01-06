import React from 'react';
import './breadcrumb-list.scss';

const BreadCrumbItem = ({ category }) => {
  return <span className="category">{category}</span>;
};

const BreadCrumbList = ({ categories }) => {
  return (
    <div className="breadcrumb-list col-10">
      {categories &&
        categories.map((category) => (
          <BreadCrumbItem key={`category_${category}`} category={category} />
        ))}
    </div>
  );
};

export default BreadCrumbList;
