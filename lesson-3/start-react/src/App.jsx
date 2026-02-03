import { Route, Routes } from 'react-router'
import Login from './component/Login'
import Board from './pages/Board'
function App() {
  return (
   <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/board' element={<Board/>} />
   </Routes>
  )
}

export default App
