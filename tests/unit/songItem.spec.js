import SongItem from '@/components/SongItem.vue';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';
describe('SongItem.vue', () => {
  test('renders song display name', () => {
    const song = {
      name: 'test',
    };
    const wrapper = shallowMount(SongItem, {
      propsData: {
        song,
      },
      global: {
        components: {
          'router-link': RouterLinkStub,
        },
      },
    });
    const author = wrapper.find('.text-gray-500');
    expect(author.text()).toBe(song.name);
  });
});
