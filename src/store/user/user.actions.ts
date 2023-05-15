import { createAsyncThunk } from "@reduxjs/toolkit"
import { IUser } from "../../types/user.type"

const fetchUserById = (userId: number): Promise<IUser> => 
    new Promise(resolve => setTimeout(() => resolve({id: 1, name: 'Alex'}), 1000))


export const getUserById = createAsyncThunk<IUser, number>('user/by-is', async(userId, thunkApi) => {
    try {
        const response = await fetchUserById(userId)
        return response
    } catch (error) {
       return thunkApi.rejectWithValue(error)
    }
    
})