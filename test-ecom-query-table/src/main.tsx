import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      staleTime: 10*(60*1000), // 10 mins
      gcTime:15*(60*1000), // 15 mins cacheTime
      refetchIntervalInBackground:true
    },
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
