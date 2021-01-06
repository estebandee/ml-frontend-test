import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Logo from '../../assets/Logo_ML.png';
import Search from '../../assets/ic_Search.png';
import './header.scss';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (searchValue.trim()) {
      history.push(`/items?search=${searchValue}`);
    }
  };

  return (
    <header className="header">
      <div className="form-container col-10">
        <form className="search-form" onSubmit={handleSubmit}>
          <Link to="/" data-testid="home-test">
            <img className="ml-logo-home" src={Logo} alt="MercadoLibre" />
          </Link>
          <div className="input-container">
            <input
              type="text"
              data-testid="input-test"
              value={searchValue}
              className="input-box"
              minLength="3"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Nunca dejes de buscar"
            />
            <button type="submit" data-testid="submit-button" className="submit-button">
              <img src={Search} alt="Buscar" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
