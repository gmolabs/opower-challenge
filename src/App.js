import React from 'react'
import './App.css'
import OpowerApp from './OpowerApp'

import { VizModeProvider } from "./contexts/VizContext"

function App() {
  return (
    <VizModeProvider>
      <OpowerApp />
    </VizModeProvider>
  )
}

export default App
