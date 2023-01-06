// import React, { useState,useEffect } from 'react'
// import Card from '../Card/card';
// import "./featuredProduct.scss";
// import axios from "axios";
// const FeaturedProduct = ({type}) => {

// // const data=[
// //   {
// //     id:1,
// //     img:"https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600",
// //     img2:"https://images.pexels.com/photos/4498314/pexels-photo-4498314.jpeg?auto=compress&cs=tinysrgb&w=600",
// //     title:"Face Wash",
// //     oldPrice:55,
// //     newPrice:45,
// //     isNew:true
// //   },
// //   {
// //     id:2,
// //     img:"https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=600",
// //     img2:"https://images.pexels.com/photos/7262404/pexels-photo-7262404.jpeg?auto=compress&cs=tinysrgb&w=600",
// //     title:"Soap",
// //     oldPrice:45,
// //     newPrice:38,
// //     isNew:true
// //   },
// //   {
// //     id:3,
// //     img:"https://images.pexels.com/photos/4916194/pexels-photo-4916194.jpeg?auto=compress&cs=tinysrgb&w=600",
// //     img2:"https://images.pexels.com/photos/4004119/pexels-photo-4004119.jpeg?auto=compress&cs=tinysrgb&w=600",
// //     title:"Sun Lotion",
// //     oldPrice:105,
// //     newPrice:90,
// //     isNew:false
// //   },
// //   {
// //     id:4,
// //     img:"https://images.pexels.com/photos/4202917/pexels-photo-4202917.jpeg?auto=compress&cs=tinysrgb&w=600",
// //     img2:"https://images.pexels.com/photos/4202889/pexels-photo-4202889.jpeg?auto=compress&cs=tinysrgb&w=600",
// //     title:"ToothBrush",
// //     oldPrice:30,
// //     newPrice:25,
// //     isNew:false
// //   }
// // ]
 
//   const [data,setData]=useState([]);
  
//   useEffect(() => {
//     const fetchData = async () => {
//        try {
//           const res = await axios.get(
//              process.env.REACT_APP_API_URL+ `/products?populate=*&[filters][type][$eq]=${type}`,
//              {
//                 headers: {
//                    Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
//                 },
//              }
//           )
//           setData(res.data.data)
//        } catch (err) {
//           console.log(err)
//        }
//     }
//     fetchData()
//  }, [])
// console.log(data)

//   return (
//     <div className='featuredProducts'>
//       <div className='top'>
//         <h1>{type} Products</h1>
//         <p>
//           these are my featured products . I am very happy that yiu visit to my website
//         </p>
//       </div>
//       <div className='bottom'>
//        {data.map((item)=>(
//         <Card item={item} key={item.id} />
//        ))}
//       </div>
//     </div>
//   )
// }

// export default FeaturedProduct;

import React from "react";
import Card from "../Card/card";
import "./featuredProduct.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;