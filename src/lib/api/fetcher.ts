import { get } from "lib/api/client";

export async function fetcher<T>(path: string) {
  const response = await get<T>(path);
  return response;
  // return await get<T>(path);
}
