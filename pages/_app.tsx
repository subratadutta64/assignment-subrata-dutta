import 'tailwindcss/tailwind.css';
import React, { ReactElement } from 'react';

function MyApp({ Component, pageProps }): ReactElement {
  console.log('I am in App.tsx');
  return (
    <div className="min-h-screen bg-slate-800">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
