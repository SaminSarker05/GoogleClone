import {React, useState} from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({hideButtons = false}) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("")
  const navigate = useNavigate();

  const search = e => {
    e.preventDefault();
    // console.log("you hit search", input);

    dispatch({
      type: actionTypes.SEARCH_TERM,
      term: input,
    });

    navigate('/search');
  };


  return (
    <form className='search'>
      <div className='search-input'>
        <SearchIcon className='search-input-icon'/>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <MicIcon/>
      </div>

      {!hideButtons ? (
        <div className='search-buttons'>
          <Button type='submit' onClick={ search } variant="outlined" >Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ): (
        <div className='search-buttons-hidden'>
          <Button type='submit' onClick={ search } variant="outlined" >Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}

    </form>
  )
}

export default Search;