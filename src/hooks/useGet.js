import { networkGet } from '@/utils/network';
import { useState, useEffect } from 'react';


function useGet() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchData = async (url) => {
      setLoading(true);
      setError(null);
      try {
        const response = await networkGet({
            method: 'GET',
            path: url,
            heads:{
                'Content-Type': 'application/json'
            }
        });
        
        
        let responseData = await response;
        console.log(responseData)
        setData(response);
        
      }  finally {
        setLoading(false);
      }
  };

  // fetchData();

  return { data, error, loading, fetchData };
}

export default useGet;