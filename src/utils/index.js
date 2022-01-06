const isFalse = (value) => (value === 0 ? false : !value);
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = object[key];
    if (isFalse(value)) {
      delete result[key];
    } else {
    }
  });
  return result;
};
