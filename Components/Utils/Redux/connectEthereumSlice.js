import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  web3: null,
  accounts: null,
  chainid: null,
  vyperStorage: null,
  vyperValue: 0,
  vyperInput: 0,
  solidityStorage: null,
  solidityValue: 0,
  solidityInput: 0,
};

const connectEthereumSlice = createSlice({
  name: 'connectEthereumSlice',
  initialState,
  reducers: {
    setWeb3: (state, action) => {
      state.web3 = action?.payload;
    },
    setAccounts: (state, action) => {
      state.accounts = action?.payload;
    },
    setChainid: (state, action) => {
      state.chainid = action?.payload;
    },
    setVyperStorage: (state, action) => {
      state.vyperStorage = action?.payload;
    },
    setVyperValue: (state, action) => {
      state.vyperValue = action?.payload;
    },
    setVyperInput: (state, action) => {
      state.vyperInput = action?.payload;
    },
    setSolidityStorage: (state, action) => {
      state.solidityStorage = action?.payload;
    },
    setSolidityValue: (state, action) => {
      state.solidityValue = action?.payload;
    },
    setSolidityInput: (state, action) => {
      state.solidityInput = action?.payload;
    },
  },
});

export const {
  setWeb3,
  setAccounts,
  setChainid,
  setVyperStorage,
  setVyperInput,
  setVyperValue,
  setSolidityStorage,
  setSolidityValue,
  setSolidityInput,
} = connectEthereumSlice.actions;
export const selectWeb3 = state => state.connectEthereumSlice.web3;
export const selectAccounts = state => state.connectEthereumSlice.accounts;
export const selectChainid = state => state.connectEthereumSlice.chainid;
export const selectVyperStorage = state =>
  state.connectEthereumSlice.vyperStorage;
export const selectVyperValue = state => state.connectEthereumSlice.vyperValue;
export const selectVyperInput = state => state.connectEthereumSlice.accounts;
export const selectSolidityStorage = state =>
  state.connectEthereumSlice.accounts;
export const selectSolidityValue = state => state.connectEthereumSlice.accounts;
export const selectSolidityInput = state => state.connectEthereumSlice.accounts;
export default connectEthereumSlice.reducer;
