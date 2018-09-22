import SerialInput from '@/components/SerialInput.vue'
import { mount } from '@vue/test-utils'

describe('components/SerialInput.vue', () => {
  test('SKIP(can mount)', () => {
    const wrapper = mount(SerialInput)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
