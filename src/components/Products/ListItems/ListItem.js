import AddToCartIcon from '../../../assests/icons/add-to-cart.svg';
import { useState } from 'react';

const ListItem = ({data}) => {

    let cartMessage = "not added to the cart yet";
    let updatedMessage = "added to the cart";
    let numberOfItemsInCart = 0;
    // const[message, setMessage] = useState(cartMessage);
    const[counter, setCounter] = useState(0);
    // const handleClick = () => {
    //     setMessage(updatedMessage);
    // }

    const decreaseCounter = () => {
        if(counter != 0){
            setCounter(counter-1);
        }
    }

    const increaseCounter = () => {
        setCounter(counter+1);
    }

    return(
        <div className='item-card'>
            <img className='img-fluid' src={`/assets/${data.thumbnail}`} alt={data.title}>
            </img>
            <div className='item-card__informaton'>
                <span className='pricing'>₹{data.discountedPrice}</span>
                <small>
                    <strike>₹{data.price}</strike>
                </small>
            </div>
            <div className='title'>
                {data.title}
            </div>
            {/* <small className='cart-message'>{message}</small> */}
            {/* <button className='cart-add' onClick={handleClick}>
                <span>
                    <img src={AddToCartIcon} alt="Add to Cart" className='addToCartIconCls'/>
                </span>
            </button> */}
            <div className='cart-addon'>
            <button onClick={decreaseCounter}><span>-</span></button>
            <span className='counter'>{counter}</span>
            <button onClick={increaseCounter}><span>+</span></button>
            </div>
        </div>
    );
}

export default ListItem;