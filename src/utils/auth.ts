// Auth utilities

/**
 * Checks if there's a valid auth token in local storage
 */
export const hasAuthToken = (): boolean => {
  if (typeof window === 'undefined') return false;

  const token = localStorage.getItem('authToken');
  return !!token;
};

/**
 * Get the auth token from local storage
 */
export const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;

  return localStorage.getItem('authToken');
};

/**
 * Removes the auth token from local storage
 */
export const removeAuthToken = (): void => {
  if (typeof window === 'undefined') return;

  localStorage.removeItem('authToken');
};
