import { restHandler } from '@/com/restHandler';
import { useMutation, useQuery } from '@tanstack/react-query';

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

// get all websites for a user
export const useGetMyWebsites = () => {
  return useQuery({
    queryKey: ['websites'],
    queryFn: async () =>
      await restHandler({ method: 'GET', url: '/websites/user' }),
  });
};
