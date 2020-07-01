import React from 'react';
import SearchBar from './recipesComp/SearchBar';
import GoogleAuth from './GoogleAuth';
import './css/header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'> Recipes </Link>
        <Link to='/saved'> My Recipes </Link>
        <Link to='/menu'> My Menu </Link>
      </div>
      <SearchBar onSubmit={props.onSubmit} />
      <div className='menu'>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
