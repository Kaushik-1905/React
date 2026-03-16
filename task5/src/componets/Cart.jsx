import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incresQty, decreseQty } from "../redux/actions/cartAction";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty.</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <button onClick={() => dispatch(decreseQty(item.id))}>-</button>
          <span> Qty: {item.qty} </span>
          <button onClick={() => dispatch(incresQty(item.id))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      {cartItems.length > 0 && <h3>Total: ₹{total}</h3>}
    </div>
  );
};

export default Cart;