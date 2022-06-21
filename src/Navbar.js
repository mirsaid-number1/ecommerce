import React,{useState} from "react";
import {Icon} from '@iconify/react';
import { useNavigate,useMatch,useResolvedPath } from "react-router-dom";
import Page_animation from "./components/animations/Page_animation";


function Navbar() {
  let [animation, setAnimation] = useState(false);
  let navigate = useNavigate();

  function moveToAnotherPage(page){
    setAnimation(prev => !prev);
    setTimeout(() => {
      navigate(page);
      setAnimation(prev => !prev);
    },1000)
    
  }  
  console.log(window.location.pathname);
  return (
    <>
    {animation ? <Page_animation /> : null}
      <div className="up_nav">
        <div className="selectors">
          <select name="language" id="language">
            <option value="RU">RU</option>
            <option value="UZ">UZ</option>
            <option value="EN">EN</option>
          </select>
          <select name="currency" id="currency">
            <option value="RUBL">RUBL</option>
            <option value="SO'M">SO'M</option>
            <option value="POUND">POUND</option>
          </select>
        </div>
        <div className="other_items">
          <span className="first_item">
            <img src="./assets/personal.png" alt="personal" />
            My Profile
          </span>
          <span className="second_item">
            <img src="./assets/trolley.png" alt="trolley" />
          </span>
          <span className="third_item">Item</span>
          <span className="forth_item">
            $00.000
            <img src="./assets/search-icon.png" alt="search" />
          </span>
        </div>
      </div>
      <nav className="navbar">
      
        <div className="nav">
          <div className="logo">
            <img src="./assets/logo.png" alt="Logo" className="logo_org" onClick={() => {moveToAnotherPage('/')}}/>
          </div>
          <div className="second_part">
            <span to="/" className="span home" onClick={() => {moveToAnotherPage('/')}}><PathName href='/' value='Home'/></span>
            <span to='bags' className="span bags" onClick={() => {moveToAnotherPage('/bags')}}><PathName href='/bags' value='Bags'/></span> 
            <span to='sneakers' className="span sneakers" onClick={() => {moveToAnotherPage('/sneakers')}}><PathName href='/sneakers' value='Sneakers'/> </span> 
            <span to='belt' className="span belt" onClick={() => {moveToAnotherPage('/belt')}}><PathName href='/belt' value='Belt'/></span>
            <span to='contact' className="span contact" onClick={() => {moveToAnotherPage('/contact')}}><PathName href='/contact' value='Contact'/></span>
          </div>
        </div>
        <div className="mobile_nav">
        <div className="logo">
            <img src="./assets/logo.png" alt="Logo" className="logo_org" />
          </div>
        <div className="input_search">
           <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"><img src="./assets/Search.png" alt="search"/></span>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </div>
          <div className="kid2">
          <Icon icon="akar-icons:bell" color="gray" width={'30px'} height='30px'  className='mobile_icon'/>
        <Icon icon="akar-icons:heart"  color="grey" width={'30px'} height='30px' className='mobile_icon'/>
          </div>
        </div>
      </nav>
      
    </>
  );
}

function PathName({href,value}){
  let resolvedPath = useResolvedPath(href);
  let isActive = useMatch({path:resolvedPath.pathname,end:true});
  
  return (<div className={isActive ? 'active' : ''}>
    {value}
  </div>)

}

export default Navbar;
