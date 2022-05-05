import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  searchBar: false,
  connectWalletModal: false,
  placeBidModal: false,
  copyUserEthAddress: false,
  userAccountModal: false,
  userAccountSnackbar: false,
  darkMode: false,
  notificationModal: false,
  uploadPreviewModal: false,
  fixPriceButton: true,
  autionButton: false,
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setSearchBar: (state, action) => {
      state.searchBar = action?.payload;
    },
    setFixPriceButton: (state, action) => {
      state.fixPriceButton = action?.payload;
    },
    setAutionButton: (state, action) => {
      state.autionButton = action?.payload;
    },
    setUploadPreviewModal: (state, action) => {
      state.uploadPreviewModal = action?.payload;
    },
    setNotificationModal: (state, action) => {
      state.notificationModal = action?.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action?.payload;
    },
    setUserAccountSnackbar: (state, action) => {
      state.userAccountSnackbar = action?.payload;
    },
    setUserAccountModal: (state, action) => {
      state.userAccountModal = action?.payload;
    },
    setCopyUserEthAddress: (state, action) => {
      state.copyUserEthAddress = action?.payload;
    },
    setConnectWalletModal: (state, action) => {
      state.connectWalletModal = action?.payload;
    },
    setPlaceBidModal: (state, action) => {
      state.placeBidModal = action?.payload;
    },
  },
});

export const {
  setSearchBar,
  setConnectWalletModal,
  setPlaceBidModal,
  setCopyUserEthAddress,
  setUserAccountModal,
  setUserAccountSnackbar,
  setDarkMode,
  setNotificationModal,
  setUploadPreviewModal,
  setAutionButton,
  setFixPriceButton,
} = modalSlice.actions;
export const selectSearchBar = state => state.modalSlice.searchBar;
export const selectConnectWalletModal = state =>
  state.modalSlice.connectWalletModal;
export const selectPlaceBidModal = state => state.modalSlice.placeBidModal;
export const selectCopyUserEthAddress = state =>
  state.modalSlice.copyUserEthAddress;
export const selectUserAccountModal = state =>
  state.modalSlice.userAccountModal;
export const selectUserAccountSnackbar = state =>
  state.modalSlice.userAccountSnackbar;
export const selectDarkMode = state => state.modalSlice.darkMode;
export const selectNotificationModal = state =>
  state.modalSlice.notificationModal;
export const selectUploadPreviewModal = state =>
  state.modalSlice.uploadPreviewModal;
export const selectFixPriceButton = state => state.modalSlice.fixPriceButton;
export const selectAutionButton = state => state.modalSlice.autionButton;
export default modalSlice.reducer;
