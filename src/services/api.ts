type AxiosRequestConfig = {
  endpoint: string;
  cache?: RequestCache;
};

export const api = {
  get: async ({ endpoint, ...options }: AxiosRequestConfig) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
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
