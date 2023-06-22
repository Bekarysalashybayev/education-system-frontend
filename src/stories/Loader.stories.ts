import type {Meta, StoryObj} from '@storybook/vue3';

import Loader from '@/components/ui/loader/BeLoader.vue';

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'UI-KIT/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    color: {control: 'color'},
  },
  args: {size: 25},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainLoader: Story = {
  args: {
    size: 25,
  },
};