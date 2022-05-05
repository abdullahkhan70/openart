import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  mutlitFile: false,
  multiUploadImages: [],
  itemName: '',
  tag: '',
  description: '',
  saleThisItem: true,
  instantSalePrice: true,
  unlockOncePurchased: false,
  addToCollection: true,
  thirteenYearOldCheckBox: false,
  agreeTermsOfServiceCheckBox: false,
  enterEthValue: '',
  oncePurchasedSwitch: false,
};

const uploadArtworkSlice = createSlice({
  name: 'uploadArtworkSlice',
  initialState,
  reducers: {
    setMutlitFile: (state, action) => {
      state.mutlitFile = action?.payload;
    },
    setOncePurchasedSwitch: (state, action) => {
      state.oncePurchasedSwitch = action?.payload;
    },
    setThirteenYearOldCheckBox: (state, action) => {
      state.thirteenYearOldCheckBox = action?.payload;
    },
    setEnterEthValue: (state, action) => {
      state.enterEthValue = action?.payload;
    },
    setAgreeTermsOfServiceCheckBox: (state, action) => {
      state.agreeTermsOfServiceCheckBox = action?.payload;
    },
    setItemName: (state, action) => {
      state.itemName = action?.payload;
    },
    setSaleThisItem: (state, action) => {
      state.saleThisItem = action?.payload;
    },
    setInstantSalePrice: (state, action) => {
      state.instantSalePrice = action?.payload;
    },
    setUnlockOncePurchased: (state, action) => {
      state.unlockOncePurchased = action?.payload;
    },
    setAddToCollection: (state, action) => {
      state.addToCollection = action?.payload;
    },
    setTag: (state, action) => {
      state.tag = action?.payload;
    },
    setDescription: (state, action) => {
      state.description = action?.payload;
    },
    setMultiUploadImages: (state, action) => {
      state.multiUploadImages.push(action?.payload);
    },
    setMultipleUploadImagesRemove: (state, action) =>
      void (state.multiUploadImages = state.multiUploadImages.filter(
        val => val?.id !== action.payload,
      )),
  },
});

export const {
  setMutlitFile,
  setMultiUploadImages,
  setMultipleUploadImagesRemove,
  setDescription,
  setItemName,
  setTag,
  setInstantSalePrice,
  setAddToCollection,
  setSaleThisItem,
  setUnlockOncePurchased,
  setAgreeTermsOfServiceCheckBox,
  setThirteenYearOldCheckBox,
  setEnterEthValue,
  setOncePurchasedSwitch,
} = uploadArtworkSlice.actions;
export const selectMutlitFile = state => state.uploadArtworkSlice.mutlitFile;
export const selectMultiUploadImages = state =>
  state.uploadArtworkSlice.multiUploadImages;
export const selectItemName = state => state.uploadArtworkSlice.itemName;
export const selectTag = state => state.uploadArtworkSlice.tag;
export const selectDescription = state => state.uploadArtworkSlice.description;
export const selectSaleThisItem = state =>
  state.uploadArtworkSlice.saleThisItem;
export const selectInstantSalePrice = state =>
  state.uploadArtworkSlice.instantSalePrice;
export const selectUnlockOncePurchased = state =>
  state.uploadArtworkSlice.unlockOncePurchased;
export const selectAddToCollection = state =>
  state.uploadArtworkSlice.addToCollection;
export const selectThirteenYearOldCheckBox = state =>
  state.uploadArtworkSlice.thirteenYearOldCheckBox;
export const selectAgreeTermsOfServiceCheckBox = state =>
  state.uploadArtworkSlice.agreeTermsOfServiceCheckBox;
export const selectEnterEthValue = state =>
  state.uploadArtworkSlice.enterEthValue;
export const selectOncePurchasedSwitch = state =>
  state.uploadArtworkSlice.oncePurchasedSwitch;

export default uploadArtworkSlice.reducer;
