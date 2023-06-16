import './App.css'
import { Route, Routes } from 'react-router-dom'
import Create from './createblog'
import List from './listblog'
import Display from './display'
import { data } from './context'
import { useState } from 'react'

function App() {

  const [state, setstate] = useState([])
  const value = {
    state, setstate
  }

  return (
    <>
      <data.Provider value={value}>

        <Routes>
          <Route path="/createblog" element={<Create />} />
          <Route path='/' element={<List />} />
          <Route path='/display/:id' element={<Display />} />

        </Routes>
      </data.Provider>
    </>
  )
}

export default App
