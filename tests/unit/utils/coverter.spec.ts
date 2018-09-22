import { convertToSerial } from '@/utils/converter'

test('"1234567890" to "1234-5678-90"', () => {
  expect(convertToSerial('1234567890')).toBe('1234-5678-90')
})
