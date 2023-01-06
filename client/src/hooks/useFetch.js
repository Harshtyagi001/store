
// import { useEffect, useState } from "react";
// import {makeRequest} from "../makerequest";


// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const res = await makeRequest.get(url);
//         setData(res.data.data);
//       } catch (err) {
//         setError(true);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// };

// export default useFetch;

import { useEffect, useState } from "react";
import { makeRequest } from "../makerequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("entered to fetch")
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
        console.log("fetched: ",res)
      } catch (err) {
        setError(true);
        console.log("fetching error!")
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;