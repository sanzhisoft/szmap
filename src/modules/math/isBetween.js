/**
 * @Author : Blackzzc
 */

export default function isBetween(value, min, max) {
  value = parseFloat(value) || 0.0
  return value >= parseFloat(min) && value <= parseFloat(max)
}