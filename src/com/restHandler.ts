// rest handler
import axios, { AxiosHeaders, AxiosRequestHeaders, Method } from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const restHandler = async ({
  method = 'GET',
  url,
  data,
  headers = {},
}: {
  method?: Method;
  url: string;
  data?: any;
  headers?: Record<string, string>;
}) => {
  const token = localStorage?.getItem('authToken');
  const response = await axios({
    method,
    url: `${backendUrl}${url}`,
    data,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
