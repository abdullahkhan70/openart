import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  itemDetialIndex: -1,
};

const itemDetailsSlice = createSlice({
  name: 'itemDetailsSlice',
  initialState,
  reducers: {
    setItemDetialIndex: (state, action) => {
      state.itemDetialIndex = action?.payload;
    },
  },
});

export const {setItemDetialIndex} = itemDetailsSlice.actions;
export const selectItemDetialIndex = state =>
  state.itemDetailsSlice.itemDetialIndex;

export default itemDetailsSlice.reducer;
