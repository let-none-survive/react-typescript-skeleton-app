import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { hot } from 'react-hot-loader'

import '@/assets/scss/App.scss'
import Home from '@/pages/Home'
import ReactQueryContextWrapper from '@/components/ReactQueryContextWrapper'

const theme = {}

const App: FC = () => {
  return (
    <ReactQueryContextWrapper>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </ReactQueryContextWrapper>
  )
}

declare let module: Record<string, unknown>

export default hot(module)(App)
