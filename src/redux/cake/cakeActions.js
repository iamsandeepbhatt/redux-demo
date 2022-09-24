import { BUY_CAKE } from "./cakeTypes";

//--Action Creator---//

export const buyCake = () => {
  return {
    // type: "BUY_CAKE" -> this works but a convention is followd to create a constants for action type
    // therefore we will create a seprate file - cakeTypes.js
    type: BUY_CAKE,
  };
};
