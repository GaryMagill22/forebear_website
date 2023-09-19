import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import ForeBearText from './components/ForeBearText';
import NewsLetterSignup from './components/NewsLetterSignup';

startTransition(() => {



  hydrateRoot(
    document,
    <StrictMode>
      <ForeBearText />
      <NewsLetterSignup />
      <RemixBrowser />
    </StrictMode>,
  );
});
