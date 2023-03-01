import { useSelector, useDispatch } from "react-redux";
import { selectProductStockQty } from '../store/product';
import { addToCart } from "../store/cart";

const ProductCard = ({product}) => {

    const { id, name, category, price, imageUrl, stockQty : productStockQty} = product;
    
    const stockQty = useSelector(selectProductStockQty(id));

    const dispatch = useDispatch();


    const addToCartHandeler = (productId, price) => {
        dispatch(addToCart({price, productId, productStockQty}))
    };

    return(
        <>
            <div className="lws-productCard">
                <img className="lws-productImage" src={imageUrl} alt={name} />
                <div className="p-4 space-y-2">
                    <h4 className="lws-productName">{name}</h4>
                    <p className="lws-productCategory">{category}</p>
                    <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{stockQty}</span></p>
                    </div>
                    <button disabled={stockQty ? false : true}  onClick={ () => addToCartHandeler(id, price)} className="lws-btnAddToCart">Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard