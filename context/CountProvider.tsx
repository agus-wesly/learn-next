import { createContext, Dispatch, ReactNode, useReducer } from "react";

interface countState {
  counter: number;
  text: string;
}

interface countAction {
  type: string;
  payload?: string;
}

interface Context {
  state: countState;
  dispatch: Dispatch<countAction> | null;
}

const reducer = (state: countState, action: countAction) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "SETTXT":
      if (action.payload)
        return {
          ...state,
          text: action.payload,
        };
      throw new Error();

    default:
      throw new Error();
  }
};

const INIT_STATE: countState = {
  counter: 0,
  text: "",
};

export const NumbContext = createContext<Context>({
  state: INIT_STATE,
  dispatch: null,
});

const CountProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <NumbContext.Provider value={{ state, dispatch }}>
      {children}
    </NumbContext.Provider>
  );
};

export default CountProvider;
