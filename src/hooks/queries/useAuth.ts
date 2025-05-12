// useAuth hook
import { useMutation } from '@tanstack/react-query';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// it's a login mutation post request takes username and password and returns a token
export const useLogin = () => {
  return useMutation({
    mutationFn: ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }): Promise<LoginSuccess | LoginError> => {
      return fetch(`${backendUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      }).then((res) => res.json());
    },
  });
};
