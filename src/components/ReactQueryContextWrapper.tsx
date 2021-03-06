import * as React from 'react'
import { ReactQueryContext } from '@/context/ReactQueryContext'
import { QueryClient, QueryClientProvider } from 'react-query'

const ReactQueryContextWrapper: React.FC<React.ReactNode> = ({ children }) => {
  const client = new QueryClient()
  return (
    <ReactQueryContext.Provider value={{ client }}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </ReactQueryContext.Provider>
  )
}

export default ReactQueryContextWrapper
