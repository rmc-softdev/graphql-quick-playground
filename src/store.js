import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  caughtPokemons: [],
};

const middleware = [thunk];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POKE":
      return {
        ...state,
        caughtPokemons: [...state.caughtPokemons, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
