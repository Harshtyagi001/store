import React, { useState } from 'react'
import "./product.scss";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import useFetch from './../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

export const Product = () => {
 
  const id=useParams().id;
  const [selectedImg,setSelectedImg]=useState("img");
  const [quantity,setQuantity]=useState(1);
 
  const dispatch=useDispatch();

const {data,loading,error}= useFetch(`/products/${id}?populate=*`);

 console.log(data);

  return (
   <div className='product'>
     {loading?"loading":
     <><div className='left'>
      <div className='images'>
         <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e)=>setSelectedImg("img")} />
         <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e)=>setSelectedImg("img2")} />
      </div>

      <div className='mainImg'>
      <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
      </div>
    </div>

    <div className='right'>
        <h1 >{data?.attributes?.title}</h1>
        <span className='price'>Rs {data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className='quantity'>
         <button onClick={()=>setQuantity((prev)=>(prev===1?1:prev-1))}>-</button>
         {quantity}
         <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
      <button className='add' onClick={()=>dispatch(addToCart({
        id:data.id,
        title:data?.attributes?.title,
        desc:data?.attributes?.desc,
        img:data?.attributes?.img?.data?.attributes?.url,
        price:data?.attributes?.price,
        quantity
      }))}>
         <AddShoppingCartOutlinedIcon/>ADD TO CART 
      </button>
      <div className='link'>
        <div className='item'>
          <FavoriteBorderOutlinedIcon/>ADD TO WISHLIST 
        </div>
        <div className='item'>
          <AccountBalanceOutlinedIcon/>ADD TO COMPARE 
        </div>
      </div> 
      <div className='info'>
        <span>Emamgi Green:</span>
        <span>Product Type:{}</span>
        <span>Tag: {data?.attributes?.categories?.data?.map(details=>(
          <span>{details?.attributes?.title}, </span>
        ))}</span>
      </div>
      <hr/>
      <div className='info'>
        <span>DESCRIPTION</span>
        <hr/>
        <span>ADDITIONAL INFORMATION</span>
        <hr/>
        <span>FAQ</span>
      </div>
    </div></>
     } 
   </div>
  )
}
