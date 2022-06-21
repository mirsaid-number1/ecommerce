import React,{useState} from 'react';
import { Icon } from '@iconify/react';

function Bottom() {
    let [mobile_bottom, setMobile_bottom] = useState({home:'#40bfff',explore:'grey',cart:'grey',account:'grey',offer:'grey'})

    function changeColorOfMobile_bottom(name) {
        setMobile_bottom({home:'grey',explore:'grey',cart:'grey',account:'grey',offer:'grey',[name]:'#40bfff'})
      }
  return (
    <div className="mobile_bottom" style={{transition:'200ms'}}>
    <div className="options home" onClick={ () => changeColorOfMobile_bottom('home')}>
      <Icon icon="ant-design:home-outlined" color={mobile_bottom.home}  width="27" height="27" />
      <p className="text" style={{color:mobile_bottom.home}}>Home</p>
    </div>
    
    <div className="options explore" onClick={ () => changeColorOfMobile_bottom('explore')}>
      <Icon icon="akar-icons:search" color={mobile_bottom.explore}  width="27" height="27" />
      <p className="text" style={{color:mobile_bottom.explore}}>Explore</p>
    </div>
    <div className="options cart" onClick={ () => changeColorOfMobile_bottom('cart')}>
     <span className="trolley"> <Icon icon="wpf:luggage-trolley" color={mobile_bottom.cart}  width="27" height="27" /></span>
      <p className="text" style={{color:mobile_bottom.cart}}>Cart</p>
    </div>
    <div className="options offer" onClick={ () => changeColorOfMobile_bottom('offer')}>
      <Icon icon="ic:outline-local-offer" color={mobile_bottom.offer}  width="27" height="27" />
      <p className="text" style={{color:mobile_bottom.offer}}>Offer</p>
    </div>
    <div className="options account" onClick={ () => changeColorOfMobile_bottom('account')}>
      <Icon icon="mdi:account" color={mobile_bottom.account}  width="27" height="27" />
      <p className="text" style={{color:mobile_bottom.account}}>Account</p>
    </div>
  </div>

  )
}

export default Bottom