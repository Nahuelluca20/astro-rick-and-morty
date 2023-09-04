import { atom } from 'nanostores';

export const paginationUrl = atom("https://rickandmortyapi.com/api/character");
export const paginationNumber = atom(0);
export function changePaginationUrl(url: string) {
  paginationUrl.set(url);
}