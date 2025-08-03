import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: () => 'products',
      method: 'GET'
    }),
    getSingleproductByName: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: 'GET'
      }),
    }),
  }),
})

export const { useGetProductByNameQuery,useGetSingleproductByNameQuery } = productApi