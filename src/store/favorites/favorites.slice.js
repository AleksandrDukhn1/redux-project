import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, action) => {
            const recipe = action.payload
            const idExist = state.some(r => r.id === recipe.id)
            if(idExist) {
                const index = state.findIndex(r => r.id === recipe.id)
                if(index !== -1) {
                    state.splice(index, 1)
                }
            } else {
              state.push(recipe)  
            }
        }
    }
})

export const {actions, reducer} = favoritesSlice