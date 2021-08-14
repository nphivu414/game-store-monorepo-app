import { stringify } from 'querystring';
export const stringifyQueryObject = (obj): string => {
  return stringify(removeEmpty(obj));
};

const removeEmpty = (obj) => {
  return Object.entries(obj)
    .filter(([, v]) => v != null)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
};
