import type { Meta, StoryObj } from '@storybook/react-vite';
import KeyInput from '../components/ui/KeyInput.tsx';
import { useArgs } from 'storybook/preview-api';

const meta: Meta<typeof KeyInput> = {
  title: 'Components/KeyInput',
  component: KeyInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Interactive key binding input component.

When clicked, the component enters **listening mode** and captures
the next pressed keyboard key. The selected key is passed to \`onChange\`.

- Prevents default browser behavior while listening.
- Automatically exits listening mode after a key is pressed.
- Displays "Unassigned" when no key is set.
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Currently assigned key value',
      table: {
        category: 'Props',
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback invoked when a new key is selected',
      table: {
        category: 'Props',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KeyInput>;

export const Default: Story = {
  args: {
    value: 'a',
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs<{ value: string }>();

    return (
      <div>
        <KeyInput
          {...args}
          value={value}
          onChange={(newKey) => {
            updateArgs({ value: newKey });
            args.onChange?.(newKey);
          }}
        />
      </div>
    );
  },
};
