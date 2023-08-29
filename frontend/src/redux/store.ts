import { Store  } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer, {  RootState } from './root_reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools();



export const store: Store<RootState> = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     // Ignore these action types
    //     ignoredActions: ['your/action/type'],
    //     // Ignore these field paths in all actions
    //     ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
    //     // Ignore these paths in the state
    //     ignoredPaths: ['items.dates'],
    //   },
    // }),
  })

// export const store: Store<RootState> = createStore(rootReducer, composeEnhancers);
