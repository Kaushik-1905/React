import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartAction";

const ProductList = () => {                              
  const products = useSelector(
    (state) => state.productState.products               
  );
  const dispatch = useDispatch();


  return (
    <div>
        <style>
            {
                `
                button{
                color:black,
                border:none,
                }
                `
            }
        </style>
      <h2>Products</h2>
      {products.length === 0 && <p>No products yet. Add one above.</p>}
      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
          <button onClick={() => dispatch(deleteProduct(p.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;