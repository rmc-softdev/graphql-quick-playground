import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  caughtPokemons: [],
};

const middleware = [thunk];

if (localStorage.getItem("caughtpokes") === null) {
  localStorage.setItem("caughtpokes", JSON.stringify(initialState));
} else {
  initialState.caughtPokemons = JSON.parse(localStorage.getItem("caughtpokes"));
}

const rootReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case "ADD_POKE":
      stateCopy = [...state.caughtPokemons, action.payload];
      localStorage.setItem("caughtpokes", JSON.stringify(stateCopy));
      return {
        ...state,
        caughtPokemons: [...state.caughtPokemons, action.payload],
      };
    case "DELETE_POKE":
      stateCopy = [
        ...state.caughtPokemons.filter((el) => {
          return el.name !== action.payload.name;
        }),
      ];
      localStorage.setItem("caughtpokes", JSON.stringify(stateCopy));
      return {
        ...state,
        caughtPokemons: [
          ...state.caughtPokemons.filter((el) => {
            return el.name !== action.payload.name;
          }),
        ],
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
