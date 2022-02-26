import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//require('dotenv').config()

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'c6e029a627mshb31f6c384d82351p1d5129jsn0402d5bdbbc5',
  };

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
  
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;

