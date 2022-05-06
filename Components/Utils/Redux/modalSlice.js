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
  serverProcessIsLoading: false,
  checkoutModal: false,
  followStepsModal: false,
  paymentSuccessModal: false,
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setSearchBar: (state, action) => {
      state.searchBar = action?.payload;
    },
    setCheckoutModal: (state, action) => {
      state.checkoutModal = action?.payload;
    },
    setFollowStepsModal: (state, action) => {
      state.followStepsModal = action?.payload;
    },
    setPaymentSuccessModal: (state, action) => {
      state.paymentSuccessModal = action?.payload;
    },
    setServerProcessIsLoading: (state, action) => {
      state.serverProcessIsLoading = action?.payload;
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
  setServerProcessIsLoading,
  setCheckoutModal,
  setFollowStepsModal,
  setPaymentSuccessModal,
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
export const selectServerProcessIsLoading = state =>
  state.modalSlice.serverProcessIsLoading;
export const selectCheckoutModal = state => state.modalSlice.checkoutModal;
export const selectFollowStepsModal = state =>
  state.modalSlice.followStepsModal;
export const selectPaymentSuccessModal = state =>
  state.modalSlice.paymentSuccessModal;
export default modalSlice.reducer;
