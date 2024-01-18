import { useEffect, useState } from 'react';
import API from './keys';

const ENGINE  = "a7c1ddbc0f9474f46";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetch = async() => {
      fetch(
        `https://customsearch.googleapis.com/customsearch/v1?cx=${ENGINE}&q=${term}&key=${API}`
      )
      .then(response => response.json()).then(result => {
        setData(result)
      })
    }

    fetch();

  }, [term]) 

  return { data };

}

export default useGoogleSearch


// GET https://customsearch.googleapis.com/customsearch/v1?cx=${ENGINE}&q=${term}&key=${API} 

// HTTP/1.1

// Accept: application/json
