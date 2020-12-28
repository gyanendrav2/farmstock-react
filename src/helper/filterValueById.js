export const filterValueById = (data, value) => {
   const result = data.filter((item) => item.id === value);
   return result;
};
