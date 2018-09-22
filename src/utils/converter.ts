export function convertToSerial(raw: string) {
  return !raw ? '' : raw.replace(/([^-]{4})([^-]{1})/g, '$1-$2')
}
