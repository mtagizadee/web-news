import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    endpoints: (builder) => ({
        getAllNews: builder.query({
            query: () => `news`,
        }),
        getNewsById: builder.query({
            query: (id) => `news/${id}`
        })
    }),
})

export const { useGetAllNewsQuery, useGetNewsByIdQuery } = newsApi