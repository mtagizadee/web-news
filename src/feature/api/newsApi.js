import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    endpoints: (builder) => ({
        getAllNews: builder.query({
            query: () => `news`,
        }),
        getNewsById: builder.query({
            query: (id) => `news/${id}`
        }),
        getImagesById: builder.query({
            query: (id) => `images/${id}`
        })
    }),
})

export const {
    useGetAllNewsQuery,
    useGetNewsByIdQuery,
    useGetImagesByIdQuery
} = api