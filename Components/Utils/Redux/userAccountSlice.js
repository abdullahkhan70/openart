import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userProfilePath: '',
};

const userAccountSlice = createSlice({
  name: 'userAccountSlice',
  initialState,
  reducers: {
    setUserProfilePath: (state, action) => {
      state.userProfilePath = action?.payload;
    },
  },
});

export const {setUserProfilePath} = userAccountSlice.actions;
export const selectUserProfilePath = state => state.userAccountSlice.searchBar;

export default userAccountSlice.reducer;
