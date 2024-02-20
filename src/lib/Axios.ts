import axios from 'axios';

export const axiosInstance = axios.create({
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
