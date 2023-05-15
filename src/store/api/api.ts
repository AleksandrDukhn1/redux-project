import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRecipe } from '../../types/recipe.type'

const API_URL = 'http://localhost:4300/recipes'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getRecipes: builder.query<IRecipe[], string>({
            query: (search) => `/?_sort=id&_order=desc&q=${search}`,
            providesTags: (result, error, search) => [{
                type: 'Recipe',
                id: search
            }]
        }),
    }),
})


export const { useGetRecipesQuery } = api