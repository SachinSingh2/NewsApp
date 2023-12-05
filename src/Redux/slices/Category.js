import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// Fetching data
export const FetchCategoryNews = createAsyncThunk('news/category' , async(category)=>{
try {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=399b61cd3a1642098b867542e0da4ef4`)
    return res.data
} catch (error) {
    console.log(error.message)
}
});


 const CategoryNews  = createSlice({
    name:"CategoryNews",
    initialState:{
        data:[],
        isLoading:false,
        error:false
    },reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(FetchCategoryNews.pending , (state , action)=>{
            state.isLoading = true
        })
        builder.addCase(FetchCategoryNews.fulfilled , (state , action)=>{
            state.isLoading =false
            state.data = action.payload
        })
        builder.addCase(FetchCategoryNews.rejected , (state , action)=>{
            state.error = true
            state.isLoading = false
        })
    }
})


export const CategoryNewsReducer = CategoryNews.reducer



// const {CategoryNewsReducer} = CategoryNews.reducers