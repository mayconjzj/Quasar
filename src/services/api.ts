import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json;charset=utf-8',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
  }
});

export const api = {
  get: async (endpoint: string, options?: AxiosRequestConfig) => {
    try {
      const response = await instance.get(endpoint, options);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
