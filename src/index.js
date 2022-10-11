import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'


const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<QueryClientProvider client={queryClient}>
		<App/>
		<ReactQueryDevtools initialIsOpen={false}/>
	</QueryClientProvider>
)
