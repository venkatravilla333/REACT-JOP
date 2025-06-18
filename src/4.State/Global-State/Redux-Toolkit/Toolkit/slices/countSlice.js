import { createSlice } from "@reduxjs/toolkit";




var initialState = {
  count:0
}

var countSlice = createSlice({
  name: 'count',
  initialState: initialState,
  reducers: {
    increase : (state) => {
      state.count += 1
    },
    decrease : (state) => {
      state.count -= 1
    }
  }
})

export default countSlice.reducer

export let {increase, decrease} = countSlice.actions

