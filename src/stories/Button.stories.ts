import type {Meta, StoryObj} from '@storybook/vue3';

import Button from '@/components/ui/button/BeButton.vue';

// eslint-disable-next-line storybook/story-exports
const meta = {
  title: 'UI-KIT/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    btnType: {control: 'select', options: ['primary', 'secondary']},
    size: {control: 'select', options: ['default', 'small', 'large']},
    // backgroundColor: {control: 'color'},
    onClick: {action: 'clicked'},
  },
  args: {label: "Test btn"},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary btn',
  },
};

export const PrimaryOutlined: Story = {
  args: {
    outline: true,
    label: 'Primary btn',
  },
};

export const Secondary: Story = {
  args: {
    btnType: 'secondary',
    label: 'Secondary btn',
  },
};

export const SecondaryOutlined: Story = {
  args: {
    outline: true,
    btnType: 'secondary',
    label: 'Secondary btn',
  },
};

export const Large: Story = {
  args: {
    label: 'Large btn',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Small btn',
    size: 'small',
  },
};
