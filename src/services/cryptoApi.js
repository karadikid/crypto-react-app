import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//require('dotenv').config()

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": 'c6e029a627mshb31f6c384d82351p1d5129jsn0402d5bdbbc5',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery

} = cryptoApi;