import React from 'react'
import { useContext } from 'react'
import { data } from './context'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';





function listblog() {
  const nav = useNavigate()
  const dat = useContext(data)
  const { state,setstate } = dat
  return (
    <div>
      <h1>bloglist</h1>
      {state.map((a,u) => <div className='li'> <button className='l' onClick={() => { nav(`/display/${a.id}`) }}>{a.title}
         </button> &nbsp;<button className='k' onClick={()=>setstate(state.filter((x,i)=>(i!=u)))}>delete</button> </div>  )}


      <br /><Button variant="primary"onClick={() => nav('/createblog')} >createblog</Button>

    </div>
  )
}

export default listblog
