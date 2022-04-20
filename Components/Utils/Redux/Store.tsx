import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import itemDetialIndex from './itemDetailsSlice';
import userAccountSlice from './userAccountSlice';
import connectEthereumSlice from './connectEthereumSlice';
import createSagaMiddleware from '@redux-saga/core';
const sageMiddleWare = createSagaMiddleware();
export const store = configureStore(
  {
    reducer: {
      modalSlice: modalSlice,
      itemDetailsSlice: itemDetialIndex,
      userAccountSlice: userAccountSlice,
      connectEthereumSlice: connectEthereumSlice,
    },
  },
  // applyMiddleware(sageMiddleWare),
);

// export default Store;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
