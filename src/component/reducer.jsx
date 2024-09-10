export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE_FROM_CART":
      const removeIndex = action.payload.index;
      return {
        ...state,
        cart: state.cart.filter((_, i) => i !== removeIndex),
      };

    case "UPDATE_QTY":
      const index = action.payload.index;
      return {
        ...state,
        cart: state.cart.map((item, i) => {
          return i === index ? { ...item, qty: action.payload.qty } : item;
        }),
      };

    case "CLEAR_ALL_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
