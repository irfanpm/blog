import React, { useRef, useContext } from 'react'
import { data } from './context'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';





function createblog() {
  const nav = useNavigate()

  const myRef = useRef(null)
  const myTextRef = useRef(null)
  const click = () => {
    const title = myRef.current.value
    const desc = myTextRef.current.value
    setstate([...state, { id: Math.random(), title: title, desc: desc, }])
    console.log(state);
    nav('/')


  }
  const des = useContext(data)

  const { state, setstate } = des

  return (
    <div className='main'>
      <h1>CREATE BLOG</h1>

      <label htmlFor=""className='lab'>title:&nbsp;</label>
      <input type="text" className='in'  ref={myRef} /> <br /><br />
      <label htmlFor="" className='lab' >description</label>
      <br />
      <textarea name="" id="" ref={myTextRef} cols="50" rows="15" ></textarea>
      <br />
      <Button variant="primary" onClick={click} >submit</Button>{' '}





    </div>
  )
}

export default createblog
