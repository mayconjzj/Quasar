import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_TOKEN}`
  },
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: 'pt-BR'
  }
});

export const api = {
  get: async (endpoint: string, options?: AxiosRequestConfig) => {
    try {
      const response = await axiosInstance.get(endpoint, options);
      return response.data;
    } catch (error) {
      console.log('Error ao buscar os dados - ');
    }
  }
};
