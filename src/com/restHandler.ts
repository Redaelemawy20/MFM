// rest handler
import axios, { AxiosRequestHeaders, Method } from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const restHandler = async ({
  method = 'GET',
  url,
  data,
  headers = {} as AxiosRequestHeaders,
}: {
  method: Method;
  url: string;
  data?: any;
  headers?: AxiosRequestHeaders;
}) => {
  const token = localStorage?.getItem('authToken');
  const response = await axios({
    method,
    url: `${backendUrl}${url}`,
    data,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
