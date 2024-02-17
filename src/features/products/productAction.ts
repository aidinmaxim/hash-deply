import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const loadProducts = createAsyncThunk(
    'products/loadProducts',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            return res.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id: number|undefined, thunkAPI)=> {
        try {
            const res = await axios.delete(`https://fakestoreapi.com/products/${id}`)
            return res.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)