import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AuthonticationContext from './context/AuthonticationContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthonticationContext>
      <App />
    </AuthonticationContext>
  </StrictMode>
);
