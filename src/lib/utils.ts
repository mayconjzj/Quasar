import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const firstDateYear = (date: string) => {
  return new Date(date).getFullYear();
};

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

export const getPageLink = (endpoint: string, page: number) =>
  `${endpoint}&page=${page}`;
