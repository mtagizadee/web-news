import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseURL = 'http://localhost:5000/'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL
    }),
    endpoints: (builder) => ({
        getAllNews: builder.query({
            query: () => `news`,
        }),
        getNewsById: builder.query({
            query: (id) => `news/${id}`
        }),
        getUserById: builder.query({
            query: (id) => `users/${id}`
        })
    }),
})

export const {
    useGetAllNewsQuery,
    useGetNewsByIdQuery,
    useGetUserByIdQuery
} = api