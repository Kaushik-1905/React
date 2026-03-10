import { useSelector ,useDispatch } from "react-redux";
import { deleteProduct } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartAction";

const productList = () =>{
    const products = useSelector(
        (state) => state.productState.products
    );
    const dispatch = useDispatch();
    
    return(
        <div>
            <h2>Product</h2>
            {
                products.map((p)=>{
                    return(
                        <div key={p.id}>
                            <h3>{p.name}</h3>
                            <p>Price: {p.price}</p>
                            <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
                            <button onClick={() => dispatch(deleteProduct(p.id))}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}