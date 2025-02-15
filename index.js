```javascript
// components/ErrorBoundary.js
import {ErrorBoundary} from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function MyErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
export default MyErrorBoundary;

```
```javascript
// pages/_app.js
import { AppProps } from 'next/app';
import MyErrorBoundary from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyErrorBoundary>
      <Component {...pageProps} />
    </MyErrorBoundary>
  );
}

export default MyApp;
```