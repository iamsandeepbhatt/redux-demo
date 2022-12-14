import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // making copy of state, so that we don't make changes into the original one
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
