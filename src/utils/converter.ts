export function convertToSerial(raw: string) {
  return !raw ? '' : raw.replace(/([^-]{4})/g, '$1-').replace(/-$/, '')
}
