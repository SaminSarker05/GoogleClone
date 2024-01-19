import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogle';
import './SearchPage.css';
import { Link } from "react-router-dom";
import Search from '../components/SearchBar';
import SearchIcon from '@mui/icons-material/Search';
import PhotoIcon from '@mui/icons-material/Photo';
import SellIcon from '@mui/icons-material/Sell';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FeedIcon from '@mui/icons-material/Feed';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // const data = response;
  console.log(data);

  return (
    <div className='search-page'>
      <div className='search-page-header'>
        <Link to="/">
          <img className='search-page-logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='google'/>
        </Link>
        <div className='search-page-header-body'>
          <Search hideButtons />
          <div className='search-page-options'>
            <div className='search-page-options-left'>
              <div className='search-page-option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='search-page-option'>
                <FeedIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className='search-page-option'>
                <PhotoIcon />
                <Link to='/all'>Images</Link>
              </div>
              <div className='search-page-option'>
                <SellIcon />
                <Link to='/all'>Shopping</Link>
              </div>
              <div className='search-page-option'>
                <RoomIcon />
                <Link to='/all'>Maps</Link>
              </div>
              <div className='search-page-option'>
                <MoreVertIcon />
                <Link to='/all'>More</Link>
              </div>
            </div>
            <div className='search-page-options-right'>
            <div className='search-page-option'>
                <Link to='/all'>Settings</Link>
              </div>
              <div className='search-page-option'>
                <Link to='/all'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      { term && (
        <div className='search-page-results'>
          <p className='search-page-result-count'>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
          {data?.items.map(item => (
            <div className='search-page-result'>
              {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                <img className='search-page-result-image' src={item.pagemap?.cse_image[0]?.src }/>
              )}
              <a href={item.link}>{item.displayLink}</a>
              <a className='search-page-result-title' href={item.link}><h2>{item.title}</h2></a>
              <p className='search-page-result-snippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default SearchPage;