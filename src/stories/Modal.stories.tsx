import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useState } from 'react';
import Modal, {
  ModalBackdrop,
  ModalPanel,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../components/ui/Modal';

type ModalStoryArgs = ComponentProps<typeof Modal> & {
  headerText: string;
  bodyText: string;
  confirmText: string;
  cancelText: string;
};

const meta: Meta<ModalStoryArgs> = {
  title: 'Components/Modal',
  component: Modal,
  subcomponents: {
    Backdrop: ModalBackdrop,
    Panel: ModalPanel,
    Header: ModalHeader,
    Body: ModalBody,
    Footer: ModalFooter,
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The **Modal** component is a compound component that provides a flexible,
composable API for building dialogs and overlays.
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: false,
      table: {
        category: 'Props',
      },
    },
    onClose: {
      control: false,
      action: 'onClose',
      description: 'Callback invoked when the modal is closed',
      table: { category: 'Props' },
    },
    headerText: {
      control: 'text',
      description: 'Modal header text',
      table: {
        category: 'Text',
      },
    },
    bodyText: {
      control: 'text',
      description: 'Modal body text',
      table: {
        category: 'Text',
      },
    },
    confirmText: {
      control: 'text',
      description: 'Confirm button text',
      table: {
        category: 'Text',
      },
    },
    cancelText: {
      control: 'text',
      description: 'Cancel button text',
      table: {
        category: 'Text',
      },
    },
  },
};

export default meta;

type Story = StoryObj<ModalStoryArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Basic modal usage using the compound component API.

Click **Open Modal** to see a fully structured dialog including
Header, Body, and Footer sections.
        `,
      },
    },
  },
  args: {
    headerText: 'Example Modal',
    bodyText: 'This is a basic modal using the compound component API.',
    cancelText: 'Cancel',
    confirmText: 'Confirm',
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Open Modal
        </button>

        <Modal {...args} open={open}>
          <Modal.Backdrop
            onClick={() => {
              args.onClose?.();
              setOpen(false);
            }}
          />
          <Modal.Panel>
            <Modal.Header>{args.headerText}</Modal.Header>
            <Modal.Body>{args.bodyText}</Modal.Body>
            <Modal.Footer>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
              >
                {args.cancelText}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
              >
                {args.confirmText}
              </button>
            </Modal.Footer>
          </Modal.Panel>
        </Modal>
      </>
    );
  },
};

type BackdropStoryArgs = ComponentProps<typeof ModalBackdrop> & ModalStoryArgs;
type BackdropStory = StoryObj<BackdropStoryArgs>;

export const BackdropVariants: BackdropStory = {
  parameters: {
    docs: {
      description: {
        story: `
Demonstrates customization of the **Modal.Backdrop** component.

Use controls to adjust:
- Blur intensity
- Opacity level

Useful for tuning visual emphasis and layering.
        `,
      },
    },
  },
  args: {
    blur: 'xl',
    opacity: 80,
    headerText: 'Heavy Backdrop',
    bodyText: 'Backdrop props are editable via controls.',
    cancelText: 'Cancel',
    confirmText: 'Confirm',
  },
  argTypes: {
    blur: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Backdrop blur intensity',
      table: {
        category: 'Backdrop Props',
      },
    },
    opacity: {
      control: {
        type: 'select',
      },
      options: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      description: 'Backdrop opacity (0–100)',
      table: {
        category: 'Backdrop Props',
      },
    },
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          Open Modal
        </button>

        <Modal open={open}>
          <Modal.Backdrop
            {...args}
            onClick={() => {
              args.onClose?.();
              setOpen(false);
            }}
          />
          <Modal.Panel>
            <Modal.Header>{args.headerText}</Modal.Header>
            <Modal.Body>{args.bodyText}</Modal.Body>
          </Modal.Panel>
        </Modal>
      </>
    );
  },
};
