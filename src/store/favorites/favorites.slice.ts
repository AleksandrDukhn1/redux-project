import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe.type";

const initialState:IRecipe[] = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, {payload: recipe}: PayloadAction<IRecipe>) => {
            //const recipe = action.payload
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