import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {Amplify} from 'aws-amplify'
import awsExports from '../src/aws-exports'
Amplify.configure(awsExports)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>)
}
