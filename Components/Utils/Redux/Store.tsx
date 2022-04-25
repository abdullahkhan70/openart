import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import itemDetialIndex from './itemDetailsSlice';
import userAccountSlice from './userAccountSlice';
import connectEthereumSlice from './connectEthereumSlice';
import createSagaMiddleware from '@redux-saga/core';
import uploadArtworkSlice from './uploadArtworkSlice';
const sageMiddleWare = createSagaMiddleware();
export const store = configureStore(
  {
    reducer: {
      modalSlice: modalSlice,
      itemDetailsSlice: itemDetialIndex,
      userAccountSlice: userAccountSlice,
      connectEthereumSlice: connectEthereumSlice,
      uploadArtworkSlice: uploadArtworkSlice,
    },
  },
  // applyMiddleware(sageMiddleWare),
);

// export default Store;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
