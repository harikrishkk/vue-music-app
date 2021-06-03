import About from '@/views/About.vue';
// limits the children component the instance may have
import { shallowMount } from '@vue/test-utils';
describe('About.vue', () => {
  test('renders innerText', () => {
    // wrapper contains methods & props to interact with component
    const wrapper = shallowMount(About);
    expect(wrapper.text()).toContain('about');
  });
});
