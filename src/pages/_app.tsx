import { Provider } from '@/provider/provider'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <Component {...pageProps} />
            <GlobalStyle />
        </Provider>
    )
}
