type AxiosRequestConfig = {
  endpoint: string;
  cache?: RequestCache;
  timeout?: number;
};

export const api = {
  get: async ({ endpoint, ...options }: AxiosRequestConfig) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}${endpoint}`,
        {
          ...options
        }
      );
      return response.json();
    } catch (error) {
      console.log('Error ao buscar os dados - ', error);
    }
  }
};
