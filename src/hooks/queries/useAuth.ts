// useAuth hook
import { restHandler } from '@/com/restHandler';
import { useMutation } from '@tanstack/react-query';

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
      return restHandler({
        url: '/auth/login',
        method: 'POST',
        data: { username, password },
      });
    },
  });
};
