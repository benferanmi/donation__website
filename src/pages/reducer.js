export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export const reducer1 = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Email":
      return {
        ...state,
        basket1: [...state.basket1, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
