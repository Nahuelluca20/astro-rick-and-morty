import { atom } from 'nanostores';

export const paginationUrl = atom("https://rickandmortyapi.com/api/character");
export const paginationNumber = atom(1);
export function changePaginationUrl(url: string) {
  paginationUrl.set(url);
}
export function changePaginatonNumber(number: number) {
  paginationNumber.set(number);
}