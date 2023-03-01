import { useSelector, useDispatch } from "react-redux";
import { selectProductById } from "../store/product";
import { incrementQty, decrementQty, removeFromCart } from '../store/cart';


const CartItem = ({cart}) => {

    const {id, productId,  price, qty } = cart;
    
    const { name, category, imageUrl, stockQty } = useSelector(selectProductById(productId));

    const totalPrice = qty * price;


    const dispatch = useDispatch();

    const incrementQtyHandeler = (cartId) => {
        dispatch(incrementQty({cartId, stockQty}));
    }

    const decrementQtyHandeler = (cartId) => {
        dispatch(decrementQty({cartId, stockQty}));
    }

    const removeItemFromCartHandeler = (cartId) => {
        dispatch(removeFromCart(cartId));
    }


    return(
        <>
            <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">
                    <img className="lws-cartImage" src={imageUrl} alt={name} />
        
                    <div className="space-y-2">
                        <h4 className="lws-cartName">{name}</h4>
                        <p className="lws-cartCategory">{category}</p>
                        <p>BDT <span className="lws-cartPrice">{price}</span></p>
                    </div>
                </div>

                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                
                        <div className="flex items-center space-x-4">
                            <button onClick={() => incrementQtyHandeler(id)}   className="lws-incrementQuantity">
                                <i className="text-lg fa-solid fa-plus"></i>
                            </button>
                            <span className="lws-cartQuantity">{qty}</span>
                            <button onClick={() => decrementQtyHandeler(id)} className="lws-decrementQuantity">
                                <i className="text-lg fa-solid fa-minus"></i>
                            </button>
                        </div>

                        <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{totalPrice}</span></p>
                    </div>
                    
                    <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                        <button onClick={() => removeItemFromCartHandeler(id)} className="lws-removeFromCart">
                            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                        </button>
                </div>
            </div>
        </>
    )
}

export default CartItem;