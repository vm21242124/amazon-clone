export const initialState = {
  basket: [],
  user: null,
};
export const getTotalBasket = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const findindex = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      )
      let newBasket = [...state.basket];
      newBasket.splice(findindex, 1)
      return {
        ...state,
        basket: newBasket,
      };
      case "SET_USER":
        return{
          ...state,
          user:action.user
        }
    default:
      return state;
  }
};
export default reducer;
