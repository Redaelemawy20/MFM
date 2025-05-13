/// section service

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { restHandler } from '@/com/restHandler';
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
// Query key constants
export const SECTION_QUERY_KEYS = {
  all: ['sections'] as const,
  list: () => [...SECTION_QUERY_KEYS.all, 'list'] as const,
  detail: (id: string) => [...SECTION_QUERY_KEYS.all, 'detail', id] as const,
};

// Hook for fetching all sections
export function useSections() {
  return useQuery({
    queryKey: SECTION_QUERY_KEYS.list(),
    queryFn: () =>
      restHandler({
        url: '/sections',
        method: 'GET',
      }),
  });
}
