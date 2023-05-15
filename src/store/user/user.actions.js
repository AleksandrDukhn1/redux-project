import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchUserById = userId => 
    new Promise(resolve => setTimeout(() => resolve({id: 1, name: 'Alex'}), 1000))


export const getUserById = createAsyncThunk('user/by-is', async(userId, thunkApi) => {
    try {
        const response = await fetchUserById(userId)
        return response
    } catch (error) {
        thunkApi.rejectWithValue(error)
    }
    
})