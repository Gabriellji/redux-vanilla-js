// ACTIONS
const incrementAction = {
  type: "INCREMENT",
};

const decrementAction = {
  type: "DECREMENT",
};

const incrementByTenAction = {
  type: "INCREMENT_BY_TEN",
};

const decrementByTenAction = {
  type: "DECREMENT_BY_TEN",
};

const resetAction = {
  type: "RESET",
};

// REDUCER
let initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT_BY_TEN":
      return state + 10;
    case "DECREMENT_BY_TEN":
      return state - 10;
    case "RESET":
      return (state = 0);
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
const reset = document.getElementById("reset");
const incrementByTenButton = document.getElementById("button-increment-by-ten");
const decrementByTenButton = document.getElementById("button-decrement-by-ten");

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
incrementByTenButton.addEventListener("click", () =>
  store.dispatch(incrementByTenAction)
);
decrementByTenButton.addEventListener("click", () =>
  store.dispatch(decrementByTenAction)
);
reset.addEventListener("click", () =>
  store.dispatch(resetAction)
);
