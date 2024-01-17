import React from 'react';
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

function Search() {
  return (
    <div className='search'>
      <div className='search-input'>
        <SearchIcon className='search-input-icon'/>
        <input/>
        <MicIcon/>
      </div>
    </div>
  )
}

export default Search;