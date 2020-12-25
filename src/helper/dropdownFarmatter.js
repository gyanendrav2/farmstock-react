export const dropdownFarmatter = (data) => {
    const result = data.map((item) => {
        return { value: item.id, label: item.name };
    });

    return result;
};

export const dropdownFarmatterIfMaxMinFound = (data) => {
    if (data?.max_value && data?.min_value) {
        const result = [];
        for (let i = data?.min_value; i <= data?.max_value; i++) {
            result.push({ value: i, label: i });
        }
        return result;
    } else {
        const result = data.map((item) => {
            return { value: item.id, label: item.name };
        });
        return result;
    }
};
