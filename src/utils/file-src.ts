const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
export function fileSrc(filename: string) {
  return backendUrl + '/' + filename;
}
