import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from "axios"

// To fetch the data
const FetchNews = createAsyncThunk("news/info" , async(props)=>{

    try {
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=a0c03cb08142445488e48e18eda2a101`)
        return res.data
    } catch (error) {
        console.log(error.message)
    }

})



 const Everynews = createSlice({
    name:'EveryNews',
    initialState:{
        isLoading:false,
        error:false,
        data:[]
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(FetchNews.pending , (state,action)=>{
            state.isLoading = true
        })
        builder.addCase(FetchNews.fulfilled , (state,action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(FetchNews.rejected , (state,action)=>{
            state.isLoading = false
            state.error = true
        })

    }
})

// const {} = Everynews.actions
export const EveryNewsReducer = Everynews.reducer