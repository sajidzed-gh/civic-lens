import { createRoot } from 'react-dom/client';
import nav from './nav';

it('should mount', () => {
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(<nav />);
  root.unmount();
});