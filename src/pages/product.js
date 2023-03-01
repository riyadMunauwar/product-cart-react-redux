import { useSelector } from 'react-redux';
import { selectAllProduct } from '../store/product'
import ProductCard from '../components/ProductCard';
import AddProductForm from '../components/AddProductForm';

const Product = () => {
    
    const products = useSelector(selectAllProduct);

    const isEmpty = products.length;

    return(
        <>
            <div className="productWrapper">

                <div className="productContainer" id="lws-productContainer">
                    {isEmpty ? products.map(product => <ProductCard key={product.id} product={product} />) : <h2>Sorry, no products available.But you can add. </h2>}
                </div>

                <div>
                    <AddProductForm/>
                </div>
                
            </div>
        </>
    )
}


export default Product