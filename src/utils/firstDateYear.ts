export const firstDateYear = (dateString: string) => {
  const [year] = dateString.split('-').map(Number);
  return year;
};
