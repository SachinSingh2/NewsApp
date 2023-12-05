import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";



// Create an async thunk for fetching top news
export const TopFetchNews = createAsyncThunk("news/info", async (page) => {
  try {
    // Replace the API URL with your new data source
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=399b61cd3a1642098b867542e0da4ef4&page=${page+1}&pageSize=8`);
    return res.data; // Assuming the response has a 'data' property with articles
  } catch (error) {
    console.log(error.message);
    throw error; // Re-throw the error to be handled by Redux Toolkit
  }
});

// Create the TopNews slice
const TopNews = createSlice({
  name: 'TopNews',
  initialState:{
    isLoading: false,
    error: false,
    articles: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(TopFetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(TopFetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload.articles; // Update articles with the new data
      })
      .addCase(TopFetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const TopNewsReducer = TopNews.reducer;
