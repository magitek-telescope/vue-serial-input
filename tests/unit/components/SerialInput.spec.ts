import SerialInput from '@/components/SerialInput.vue'
import { mount } from '@vue/test-utils'

describe('components/SerialInput.vue', () => {
  test('can mount with props value', () => {
    const wrapperWithRawNumber = mount(
      SerialInput,
      {
        propsData: {
          value: '1234567890'
        }
      }
    )
    const wrapperWithConvertedNumber = mount(
      SerialInput,
      {
        propsData: {
          value: '1234-5678-90'
        }
      }
    )
    const covertFromRawValue = (wrapperWithRawNumber.vm.$el as HTMLInputElement).value
    const noConvertValue = (wrapperWithRawNumber.vm.$el as HTMLInputElement).value
    expect(covertFromRawValue.includes('-')).toBeTruthy()
    expect(noConvertValue.includes('-')).toBeTruthy()
  })
  test('when change value, updateValue has called.', () => {
    const wrapper = mount(
      SerialInput,
      {
        propsData: {
          value: '1234567890'
        }
      }
    )
      ; (wrapper.element as HTMLInputElement).value = '12345678'
    wrapper.trigger('input')
    expect(wrapper.emitted('input')).toBeTruthy()
  })
})
