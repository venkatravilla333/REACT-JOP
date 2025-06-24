import { createSlice } from "@reduxjs/toolkit";




var cakeSlice = createSlice({
  name: 'cake',
  initialState: { noOfCakes: 100 },
  reducers: {
    buyCake: (state) => {
      state.noOfCakes -= 1
    }
  }
})

export default cakeSlice.reducer

export let {buyCake} = cakeSlice.actions