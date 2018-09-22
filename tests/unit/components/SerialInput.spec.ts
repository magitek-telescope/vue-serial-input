import SerialInput from '@/components/SerialInput.vue'
import { mount } from '@vue/test-utils'

describe('components/SerialInput.vue', () => {
  test('SKIP(can mount)', () => {
    const wrapper = mount(
      SerialInput,
      {
        propsData: {
          value: '1234567890'
        }
      }
    )
    expect((wrapper.vm.$el as HTMLInputElement).value).toBe('1234-5678-90')
  })
})
