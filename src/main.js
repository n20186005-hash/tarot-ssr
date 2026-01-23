import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider as HelmetProviderOriginal } from 'react-helmet-async'
import { I18nextProvider } from 'react-i18next'
import App from './App.tsx'
import i18n from './i18n'
import './index.css'

// Force type assertion
const HelmetProvider = HelmetProviderOriginal as any;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </HelmetProvider>
  </StrictMode>,
)
