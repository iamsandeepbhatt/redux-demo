import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h1>Number of Cakes - {props.numOfCakes}</h1>
      <button>Buy Cake - {props.buyCake}</button>
    </div>
  );
}

//step1 - create two functions for state and dispatch
const mapStateToProps = (state) => {
  // gets redux state as parameter and returns an object
  return {
    numOfCakes: state.numOfCakes, // Selectors - returns state info from Redux store, but used in large applications,
    // not here, based on some conditions only required states are selected inside selectors
    // a sefrate flie is created to filter the selectors.
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// step3- we will connect these two functions with React component
// connect HOC is used for this - import from react-redux
// connect at the bottom while exporting the component
// export default CakeContainer;

// connect mapStateToProps and mapStateToProps with CakeContainer

export default connect(mapStateToProps, mapStateToProps)(CakeContainer);
