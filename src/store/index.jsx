import React, { useReducer, createContext, useContext } from 'react';
import reducer from './reducer';
import { useTheme } from '~/hooks/useTheme';

const StateContext = createContext();
const DispatchContext = createContext();

export function StoreProvider({ children }) {
  const [theme] = useTheme();
  const store = {
    theme,
    searchQuery: '',
  };
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useStoreState() {
  return useContext(StateContext);
}

export function useStoreDispatch() {
  return useContext(DispatchContext);
}
