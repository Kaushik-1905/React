
const initialState = {
  cartItems: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_TO_CART":
      const exist = state.cartItems.find(
        (item) => item.id === action.payload.id   
      );
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [
          ...state.cartItems,                    
          { ...action.payload, qty: 1 },          
        ],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(       
          (item) => item.id !== action.payload    
        ),
      };

    case "INCRESE_Qty":                       
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };

    case "DECRESE_QTY":                          
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, qty: Math.max(1, item.qty - 1) }
            : item
        ),
      };

    default:
      return state;                               
  }
};

export default CartReducer;