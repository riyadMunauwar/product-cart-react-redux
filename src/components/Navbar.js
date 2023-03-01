import { useSelector } from 'react-redux';
import { selectTotalCartItemCount } from '../store/cart';
import logo from '../assets/images/logo.png';

const Navbar = ({pageChangeHandeler}) => {

    const cartItemCount = useSelector(selectTotalCartItemCount);

    return(
        <>
            <nav className="bg-[#171C2A] py-4">
                <div className="navBar">
                    <a onClick={(e) => pageChangeHandeler(e, 'home')} href="#home">
                        <img src={logo} alt="LWS" className="max-w-[140px]" />
                    </a>

                    <div className="flex gap-4">
                        <a onClick={(e) => pageChangeHandeler(e, 'home')}  href="#home" className="navHome" id="lws-home"> Home </a>
                        <a onClick={(e) => pageChangeHandeler(e, 'cart')}  href="#cart" className="navCart" id="lws-cart">
                            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                            <span id="lws-totalCart">{cartItemCount}</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;