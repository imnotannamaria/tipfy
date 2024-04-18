import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function GetPaginationNumber(indicationsLength: number): number {
  const pages = Math.ceil(indicationsLength / 10)
  return pages
}
