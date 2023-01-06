
import React,{useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "./navbar.scss"
import Cart from './../Cart/cart';
import {useSelector} from 'react-redux';

const Navbar = () => {
  const products=useSelector(state=>state.cart.products);

  const [open ,setOpen]=useState(false);
  return (
    <div className='navbar'>
    <div className='wrapper'>
      <div className='left'>
        <div className='item' >
          <img src="/img/flag-logo.jpg" alt=""/>
          {/* <KeyboardArrowDownIcon/> */}
          </div>
          <div className='item'>
            <span>INR</span>
          {/* <KeyboardArrowDownIcon/> */}
        </div>
        <div className='item'>
         <Link className='link' to="/products/1">Women</Link>
         </div>
         <div className='item'>
         <Link className='link' to="/products/2">Men</Link>
         </div>
         <div className='item'>
         <Link className='link' to="/products/3">Cosmetics</Link>
         </div>
      </div>

      <div className='center'>
        <Link className='link' to="/">GreenStore</Link>
        </div>

        <div className='right'>
        <div className='item'>
        <Link className='link' to="/">HomePage</Link>
        </div>
        <div className='item'>
        <a className='link' href="#footer">About</a>
        </div>
        <div className='item'>
        <a className='link' href="#contact">Contact</a>
        </div>
        <div className='item'>
        <a className='link' href="#categories">Stores</a>
        </div>
        <div className='icons'>
          {/* <SearchIcon/>
          <PersonOutlinedIcon/>
          <FavoriteBorderOutlinedIcon/> */}
          <div className='cartIcon' onClick={()=>setOpen(!open)}>
          <ShoppingCartOutlinedIcon/>
          <span>{products.length}</span>
          </div>
        </div>

        </div>
        
        </div>
        {open&& <Cart/>}
    </div>
  );
};

export default Navbar