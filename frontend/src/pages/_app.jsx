import React from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && router.pathname !== '/Login' && router.pathname !== '/NewUser') {
      router.push('/Login');
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
