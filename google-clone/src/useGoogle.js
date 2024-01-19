import { useEffect, useState } from 'react';
import API from './keys';

const ENGINE  = "a7c1ddbc0f9474f46";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetch_data = async() => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API}&cx=${ENGINE}&q=${term}`
      )
      .then(response => response.json()).then(result => {
        setData(result)
      })
    }

    fetch_data();

  }, [term]) 

  return { data };

}

export default useGoogleSearch