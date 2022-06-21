import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import {nav_obj} from '../Navbar';
function Login() {
  let [maxMin,setMaxMin] = useState('max');
  let [counter,setCounter] = useState(0);
  console.log(maxMin);
  let move;
  useEffect(() => {
    move = gsap.to('.form_part',{right:0});
    if(maxMin == 'min'){
      move.reverse()
    }else {
      move.restart()
    }
    },[maxMin])

    
  // style={ maxMin == 'max' ? {right:0} : {
  //   left: '-10px'
  // }}
  console.log(maxMin)
  function minimizer(){
    setCounter(prev => prev +  1);
    console.log(counter)
    setMaxMin(maxMin == 'max' ? 'min' : 'max');
    
  }
  return (
    <>
      <div className='route_nav'>
        <Link to='/' className='Link' onClick={() => {nav_obj.method()}}>Home</Link>/Contact
      </div>
      <div className='contact_part '>
        <div className='img_part'>
          <span className='main_word'>Get in touch</span>
          <div className='info_list'>
            <span className='email'>mir21.07.2004@gmail.com</span>
            <span className='number'>+998935430714</span>
            <span className='location'>Tashkent street Mirzo Ulugbek district Ahmad Yugnakiy Community house#50 apartment#45</span>
          </div>
          {
            maxMin == 'max' ? 
            <span className='minimizer' onClick={() => {move.reverse();setMaxMin('min')}}>            
            <Icon icon="akar-icons:chevron-right" color="white" width="25" height="25" />
          </span>
          :
          <span className='minimizer' onClick={() => {move.restart();setMaxMin('max')}}>
          <Icon icon="akar-icons:chevron-left" color="white" width="25" height="25" /> 
          </span>
          }
        </div>
        <div className='form_part' >
  <form className={maxMin == 'max' ? 'form_contact right' : 'form_contact left'} >
    <div className=" mb-3 w-100">
      <label htmlFor="exampleFormControlInput1" className="form-label">Fullname</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Fullname" required/>
    </div>     
    <div className=" mb-3 w-100">
      <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" required/>
    </div>
    <div className=" mb-3 w-100">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" required></textarea>
    </div>
    <div className="mb-3 w-100">
    <button type="submit" className="btn btn-primary mb-3 submit w-100">Send message</button>
    </div>
   </form>
        </div>
      </div>
    </>
  )
}

export default Login