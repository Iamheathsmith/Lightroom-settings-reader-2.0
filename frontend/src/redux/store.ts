import { Store  } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer, {  RootState } from './root_reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools();


export const store: Store<RootState> = configureStore({
    reducer: rootReducer,
  })

// export const store: Store<RootState> = createStore(rootReducer, composeEnhancers);
