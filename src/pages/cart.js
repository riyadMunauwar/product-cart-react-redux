import { useSelector } from "react-redux"
import { selectAllCart } from "../store/cart"
import CartItem from "../components/CartItem"
import CartBillDetailsCard from "../components/CartBillDetailsCart"

const Cart = () => {

    const carts = useSelector(selectAllCart);

    const isEmpty = carts.length;

    return(
        <>
            <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>

                <div className="cartListContainer">
                
                    <div className="space-y-6">
                        {isEmpty ? carts.map(cart => <CartItem key={cart.id} cart={cart} />) : <h2>Your cart is empty. Keep shopping!</h2>}
                    </div>

                    <div>
                        <CartBillDetailsCard />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart