
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

// Make Prism globally available for ComponentViewer.tsx
declare global {
  interface Window {
    Prism: typeof Prism;
  }
}

// Attach Prism to window for usage in other components
if (typeof window !== 'undefined') {
  window.Prism = Prism;
}

export const useSyntaxHighlighter = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
};
