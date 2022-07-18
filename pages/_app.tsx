import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0';
import QuestionProvider from '../context/QuestionContext';
import UserlistProvider from '../context/UserlistContext';
import Protecter from '../components/Protecter';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <UserlistProvider>
      <QuestionProvider>
        <UserProvider>
        <Protecter>
          <Component {...pageProps} />
        </Protecter>
        </UserProvider>
    </QuestionProvider>
   </UserlistProvider>
  )
}

export default MyApp
