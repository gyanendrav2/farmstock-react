export const dropdownFarmatter = (data) => {
  const result = data.map((item) => {
    return { value: item.id, label: item.name };
  });

  return result;
};
