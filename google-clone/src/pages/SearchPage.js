import React from 'react';
import { useStateValue } from '../StateProvider';
import './SearchPage.css';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  return (
    <div className='search-page'>
      <div className='search-page-header'>
        <h1> { term } </h1>

      </div>
      <div className='search-page-results'>

      </div>

    </div>
  )
}

export default SearchPage;