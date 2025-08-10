import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Detect dev server environment and warn if Webpack Dev Server is injected
if (typeof window !== 'undefined') {
  const w = window as any;
  if (w.webpackHotUpdate || w.__webpack_dev_server_client__) {
    console.warn('[EnvCheck] Detected Webpack Dev Server client on the page.\n' +
      'Please stop any Webpack dev server and run the app with Vite using: npm run dev');
  } else if (typeof import.meta !== 'undefined' && (import.meta as any)?.env?.DEV) {
    console.info('[EnvCheck] Vite dev mode active on port 8080');
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
