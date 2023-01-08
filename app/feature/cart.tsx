import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/carts",
        body: data,
      }),
    }),

    singleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
    }),
  }),
});

export const { useAddToCartMutation, useSingleProductQuery } = authApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const productApi = createApi({
//   reducerPath: "productApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:5000",
//   }),

//   endpoints: (builder) => ({
//     /*  getProducts: builder.query<any, void>({
//       query: () => ({ url: "/carts" }),
//     }), */
//     addToCart: builder.mutation({
//       query: (data) => ({
//         url: "/carts",
//         method: "POST",
//         body: data,
//       }),
//     }),
//   }),
// });

// export const { useAddToCartMutation } = productApi;
