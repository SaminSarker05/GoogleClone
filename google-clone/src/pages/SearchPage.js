import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogle';
import './SearchPage.css';
import response from '../Response';
import { Link } from '@mui/material';
import Search from '../components/SearchBar';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term);

  
  const data = response;
  console.log(data);

  return (
    <div className='search-page'>
      <div className='search-page-header'>
        <Link to="/">
          <img className='search-page-logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='google'/>
          

        </Link>
        <div className='search-page-header-body'>
          <Search hideButtons />

        </div>
        

      </div>
      <div className='search-page-results'>

      </div>

    </div>
  )
}

export default SearchPage;