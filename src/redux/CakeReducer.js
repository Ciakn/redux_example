const initialState = {
  numOfCakes: 10,
};

const CakeReducer = (state = initialState, aciton) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes--,
      };

     

    default: throw new Error("Unknown Type Aciton")
      
  }
};
