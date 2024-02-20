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
