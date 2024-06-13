import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from "axios"

const history = () => {
  const { token } = useSelector((state) => state.auth);
  const [history,setHistory] = useState ([])

  const fetchPhotos = async () => {
    // e.preventDefault();
    // setLoading(true);
    // setErrorMsg('');
    console.log(token);
    try {
      // const query = searchInput.current.value;
      const response = await axios.get(`http://localhost:3000/api/v1/gethistory`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        withCredentials: true // If your backend requires credentials
      });
      console.log(response);
        

    } catch (error) {
      // setErrorMsg('Error fetching photos');
      console.error(error.message);
    }
    // } finally {
    //   setLoading(false);
    // }
  };
  useEffect(()=>{
    console.log("effect")
    fetchPhotos();
  },[])

  return (
    <div className='text-white'>
      {/* {history.map((hist)=>(
        <h4 key={hist.query}>{hist.query}</h4>
      ))} */}
    </div>
  )
}

export default history