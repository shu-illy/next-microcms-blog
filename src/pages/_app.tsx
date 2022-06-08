import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CustomHeader from '../components/CustomHeader';

function MyApp({ Component, pageProps }: AppProps) {
  const headerLinks = [
    {
      label: 'My Menu',
      link: '',
      links: [{ label: 'google', link: 'https://google.com' }],
    },
  ];
  return (
    <>
      <CustomHeader links={headerLinks} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
