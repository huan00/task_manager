import Index from './pages/Index.js'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Index />} />
      </Routes>
    </div>
  )
}

export default App
