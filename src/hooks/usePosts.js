import { networkPost } from "@/utils/network";

// usePost.js

import { useState, useEffect } from 'react';

function usePost(url) {
    
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const postData = async (newData) => {
    setLoading(true);
    setError({});

    
    try {
      const response = await networkPost({
          method: 'Post',
          path: url,
          heads:{
              'Content-Type': 'application/json'
          },
          body: newData
      });
      
      if (response.status !== 200) {
        // setError({errors : response.errors, message : response.message});
        setError(response.errors);
      }else{
        let responseData = await response;
        setData(responseData);
      }
    }  finally {
      setLoading(false);
    }
  };



  return { data, error, loading, postData };
  
}

export default usePost;












