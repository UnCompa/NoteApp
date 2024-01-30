import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pending from './pages/Pending'
import Layout from './layout/Layout'
import CreateNote from './pages/CreateNote'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}></Route>
        <Route path='/create' element={<Layout><CreateNote/></Layout>}></Route>
        <Route path='/pending' element={<Layout><Pending/></Layout>}></Route>
      </Routes>
  )
}

export default App
