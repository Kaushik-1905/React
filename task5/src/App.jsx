import ProductForm from './componets/ProductForm';
import ProductList from './componets/ProductList';  
import Cart from './componets/Cart';                  
import './App.css';

function App() {
  return (
    <>
      <h1>Redux Shop</h1>
      <ProductForm />
      <hr />
      <ProductList />
      <hr />
      <Cart />
    </>
  );
}

export default App;