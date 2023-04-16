import { createAction, createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: ''
  },
  reducers: {
    updateCategory: (state, action) => {
      state.category = action.payload
    }
  }
});

export const updateCategory = createAction('category/updateCategory');