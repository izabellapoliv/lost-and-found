import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Sidebar from '../components/Sidebar';
import { SidebarContextProvider } from '../contexts/SidebarContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarContextProvider>
      <div className="flex flex-no-wrap">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </SidebarContextProvider>
  )
}

export default MyApp
