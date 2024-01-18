import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogle';
import './SearchPage.css';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log(data);

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