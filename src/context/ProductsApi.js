import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products', 
        params 
      }),
      providesTags:["Product"]
    }),
    getSearchProducts: build.query({
      query : (params) => ({
       url : '/products/search?',
       params , 
       method : "GET"
      }),
      providesTags:["Product"]
    }),
    useGetProductById: build.query({
      query : (id) => ({
        url: `/products/${id}` ,
        method : "GET"
      }),
      providesTags:["Product"]
    })
  }),
})

export const {
  useGetProductsQuery,
  useGetSearchProductsQuery ,
  useUseGetProductByIdQuery ,
//   useDeleteProductMutation,
//   useCreateProductMutation,
//   useUpdateProductMutation
} = productApi

