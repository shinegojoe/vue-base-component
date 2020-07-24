import { shallowMount, mount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
import TestPage from '@/views/TestPage.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('confirm test', () => {
  it('test', async () => {
    const wrapper = mount(TestPage)
    const xx = 'ok'
    console.log(wrapper.html())
    // expect(wrapper.html()).toContain(xx)
    const button = wrapper.find('button')
    await button.trigger('click')
    console.log(wrapper.html())
    expect(wrapper.html()).toContain(xx)


  })
})
