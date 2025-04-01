/**
 * @param {string|number} value
 * @returns {string} 숫자로 이루어진 스트링 값이 리턴
 */
const refineStringToNumber = (value: string): string => {
  if (value === undefined || value === null) return "";

  return String(value).replace(/[^0-9]/g, "");
};

export { refineStringToNumber };
