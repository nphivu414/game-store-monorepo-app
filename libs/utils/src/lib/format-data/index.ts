export const getMultipleItemNames = (items?: any[], amount?: number, nameKey?: string): string => {
  if (!items) {
    return '';
  }
  const itemNames = items.map((item) => item[nameKey || 'name']);
  if (!amount) {
    return itemNames.join(', ');
  }
  return itemNames.splice(0, amount).join(', ');
};
