/**
 * @param {string|number} value
 * @returns {string} 숫자로 이루어진 스트링 값이 리턴
 */
const refineStringToNumber = (value: string): string => {
  if (value === undefined || value === null) return "";

  return String(value).replace(/[^0-9]/g, "");
};

/**
 * 숫자를 1,000원 단위에 콤마(,) 추가
 * @param {number|string} value
 * @returns {string} 콤마가 포함된 형식의 문자열
 */
const formatCurrency = (value: string): string => {
  const refineInputValue = refineStringToNumber(value);
  return refineInputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { refineStringToNumber, formatCurrency };
