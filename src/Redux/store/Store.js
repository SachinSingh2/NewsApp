import {configureStore} from '@reduxjs/toolkit'
import { EveryNewsReducer } from '../slices/Everything'
import { TopNewsReducer } from '../slices/TopHeadline'
import { CategoryNewsReducer } from '../slices/Category'

const store = configureStore({
reducer:{
    Everynews:EveryNewsReducer,
    TopNews:TopNewsReducer,
    CategoryNews:CategoryNewsReducer
}
})

export default store