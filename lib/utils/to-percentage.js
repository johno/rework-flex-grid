module.exports = function toPercentage(value, numDecimals) {
  value *= 100;
  return value.toFixed(value % 1 === 0 ? 0 : numDecimals) + '%';
}