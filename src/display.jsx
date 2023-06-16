import React, { useContext } from 'react'
import { data } from './context'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




function display() {
  const dat=useContext(data)
  const {id}=useParams()
  const {state,setstate}=dat
  const title=state.filter((a)=>a.id==id)

  return (
    <div>
      <h1><u>blog</u></h1> <br />

      {title.map((x)=>
        ( <div className='z'> <h2 key={x.id}>{x.title}</h2> <br /> <p>{x.desc} </p>   </div> ))}
     <br />  <Link to='/'>  <Button variant="primary" >List</Button> </Link>
    </div>
  )
}

export default display

