import { restHandler } from '@/com/restHandler';
import { useMutation } from '@tanstack/react-query';

export const useCreateWebsite = () => {
  return useMutation({
    mutationFn: async (website: FormData) => {
      return await restHandler({
        method: 'POST',
        url: '/websites',
        data: website,
      });
    },
  });
};
