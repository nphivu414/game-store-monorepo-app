export const getMultipleItemNames = (genres?: any[], amount?: number, nameKey?: string): string => {
  if (!genres) {
    return '';
  }
  const genreNames = genres.map((genre) => genre[nameKey || 'name']);
  if (!amount) {
    return genreNames.join(', ');
  }
  return genreNames.splice(0, amount).join(', ');
};
