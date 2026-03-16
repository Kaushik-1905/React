// BUG: all 4 actions were missing payload

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,       
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,         
});

export const incresQty = (id) => ({
  type: "INCRESE_Qty",
  payload: id,           
});

export const decreseQty = (id) => ({
  type: "DECRESE_QTY",
  payload: id,          
});