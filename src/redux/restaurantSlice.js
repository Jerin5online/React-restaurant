import axios from "axios";

const { createSlice, createAsyncThunk } =require("@reduxjs/toolkit");
export const fetchrestaurant = createAsyncThunk('restaurantList/fetchrestaurant' ,()=>{
const result = axios.get('./restaurant.json').then(respose=>respose.data.restaurants)
console.log(result);
return result
})



 const restaurantSlice = createSlice({
  name:'restaurantList',
  initialState:{
 loading:false, //pending
 allrestaurant:[],  //resolve
 searchRestaurant:[],
 error:""  //reject
  },
  extraReducers:(builder)=>{    // builder holds the value/response from thunk
  builder.addCase(fetchrestaurant.pending,(state)=>{
              state.loading = true;
  })

  builder.addCase(fetchrestaurant.fulfilled,(state,action)=>{
     state.loading = false
              state.allrestaurant = action.payload;
              state.searchRestaurant=action.payload;
              state.error = ""
  })
  builder.addCase(fetchrestaurant.rejected,(state,action)=>{
              state.loading = false
              state.allrestaurant =""
              state.error = action.error.message})


  },
  
  reducers:{
    search :(state,action)=>{
     state.allrestaurant = state.searchRestaurant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
    }
  }

})
export const {search} = restaurantSlice.actions
export default restaurantSlice.reducer