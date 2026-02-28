// @ts-ignore
import type { Preview } from '@storybook/react-vite';
import '../src/main.css';

const preview: Preview = {
  decorators: [
    (Story) => {
      // Ensure portal root exists
      const modalRootId = 'modal-root';
      let modalRoot = document.getElementById(modalRootId);

      if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.setAttribute('id', modalRootId);
        document.body.appendChild(modalRoot);
      }
      // @ts-ignore
      return <Story />;
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
