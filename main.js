// ACTIONS
const incrementAction = {
    type: "INCREMENT"
  };
  
  const decrementAction = {
    type: "DECREMENT"
  };
  
  // REDUCER
  let initialState = 0;
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };
  
  // STORE
  const { createStore } = Redux;
  const store = createStore(counterReducer);
  
  const counterRender = document.getElementById("counter-render");
  const incrementButton = document.getElementById("button-increment");
  const decrementButton = document.getElementById("button-decrement");
  
  // MAIN
  const render = () => {
    counterRender.innerText = store.getState();
  };
  
  render();
  store.subscribe(render);
  
  incrementButton.addEventListener("click", () =>
    store.dispatch(incrementAction)
  );
  decrementButton.addEventListener("click", () =>
    store.dispatch(decrementAction)
  );
  