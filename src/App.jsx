import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
    
  )
}

export default App