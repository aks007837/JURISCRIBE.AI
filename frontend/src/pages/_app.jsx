import 'focus-visible'
import '@/styles/tailwind.css'
// import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Hydrate state={pageProps.dehydratedState}> */}
      <Component {...pageProps} />
      {/* </Hydrate> */}
    </QueryClientProvider>
  )
}
