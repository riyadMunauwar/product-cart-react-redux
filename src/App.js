import { useState } from 'react';
import Product from './pages/product'
import Cart from './pages/cart';
import Navbar from './components/Navbar';


function App() {

  const [page, setPage] = useState('home');

  const renderPage = (() => {

      const route = {
        home: <Product />,
        cart: <Cart />,
      }

      return route[page]
      
  })()


  const onPageChangeHandeler = (e, page) => {
    e.preventDefault();
    setPage(page);
  }

  return (
      <>
          <Navbar pageChangeHandeler={onPageChangeHandeler}/>

          <main className="py-16">
            {renderPage}
          </main>
      </>
  );
}

export default App;
