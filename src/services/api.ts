import { AxiosRequestConfig } from 'axios';

import { axiosInstance } from '@/lib/Axios';

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
