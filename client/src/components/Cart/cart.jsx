import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import "./cart.scss"
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js'
import { makeRequest } from './../../makerequest';
const Cart = () => {

  // const data=[
  //   {id:1,
  //   img:"https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   img2:"https://images.pexels.com/photos/4498314/pexels-photo-4498314.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   title:"Face Wash",
  //   desc:"This is the very usefyl product .it has too many benifits , you are thankful to buy this product . Keep visiting and have a good day!",
  //   oldPrice:55,
  //   newPrice:45,
  //   isNew:true
  // },{
  //   id:2,
  //   img:"https://images.pexels.com/photos/6621464/pexels-photo-6621464.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   img2:"https://images.pexels.com/photos/7262404/pexels-photo-7262404.jpeg?auto=compress&cs=tinysrgb&w=600",
  //   title:"Soap",
  //   desc:"This is the very usefyl product .it has too many benifits , you are thankful to buy this product . Keep visiting and have a good day!",
  //   oldPrice:45,
  //   newPrice:38,
  //   isNew:true
  // }]

  const products=useSelector(state=>state.cart.products);

  const dispatch=useDispatch();

  const totalPrice=()=>{
    let total=0;
    products.forEach(item=>(total+= item.quantity*item.price));
    return total.toFixed(2);
  };

  const stripePromise=loadStripe('pk_test_51MKzyhSFjsxhTiREpj9mHuuYE9R14g4xhVrIXEUylm2QGrblr7ozf0PR8KIuoQOyqw3DbZTFdgNwOv6rL7WBGWmH00sOoeGSpi');

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map((item)=>(
        <div className='item' key={item.id}>
        <img src={process.env.REACT_APP_UPLOAD_URL+item.img}/>
        <div className='details'>
        <h1>{item.title}</h1>
        <p>{item.desc?.substring(0,100)}</p>
        <div className='price'>{item.quantity} x {item.price}</div>
        </div>
        <DeleteOutlineOutlinedIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
         </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>Rs {totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart