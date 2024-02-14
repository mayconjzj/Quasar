import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPageLink = (endpoint: string, page: number) =>
  `${endpoint}&page=${page}`;

export const formatDate = (dateString: string) => {
  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
  ];

  const [year, month, day] = dateString.split('-').map(Number);
  const formattedDate = `${day} de ${months[month - 1]} de ${year}`;

  return formattedDate;
};

export const firstDateYear = (dateString: string) => {
  const [year] = dateString.split('-').map(Number);
  return year;
};
