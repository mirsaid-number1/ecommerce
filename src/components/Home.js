import React,{useState} from "react";
import { Icon } from '@iconify/react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components'

function Home() {
  let inner_nav = ['All', 'Bags', 'Sneakers', 'Belt', 'Sunglass'];
  let [slide_style, setSlide_style] = useState({left:0});
  let [activated_nav,setActivated_nav] = useState(0);
  let [hover, setHover] = useState({love:true,trolley:true});
  let breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768, itemsToShow:3},
  ];


  function slide(num) {
    setSlide_style({
      left: num * 100 + 'px',
    }); 
    setActivated_nav(num);
  };

  return (<>
      <div className="big_wrapper">
        <div className="banner">
          <div className="text">
            <b>Super Flash Sale 50% OFF</b>
          </div>
        </div>
        <Carousel enableAutoPlay autoPlaySpeed={15000} breakPoints={breakPoints} className="carusel">
          <Item className="carusel_card bag">
            <p className="name">FS - QUILTED MAXI CROSS BAG</p>
            <img src="./assets/wallet (1).jpg" alt="wallet" className="img" />
            <span className="tog">
              <span className="old_price">$533,34</span>
              <span className="promo">24%</span>
            </span>
            <span className="p cost">$234,43</span>   
          </Item>
          <Item className="carusel_card k1">
            <p className="name">FS - QUILTED MAXI CROSS BAG</p>
            <img src="./assets/k1.jpg" alt="wallet" className="img" />
            <span className="tog">
              <span className="old_price">$533,34</span>
              <span className="promo">24%</span>
            </span>
            <span className="p cost">$234,43</span>
          </Item>
          <Item className="carusel_card k2">
            <p className="name">FS - QUILTED MAXI CROSS BAG</p>
            <img src="./assets/k2.jpg" alt="wallet" className="img" />
            <span className="tog">
              <span className="old_price">$533,34</span>
              <span className="promo">24%</span>
            </span>
            <span className="p cost">$234,43</span>
          </Item>
        </Carousel>
      </div>
      <h2 align="center">The Best Items</h2>
    
      <nav className="items_nav">
        <ul className="items" ref={inner_nav}>
          {inner_nav.map( (item,index) => (
            <li className={'item'} key={index} onClick={() => { slide(index) }}  ><a className="a" style={ activated_nav == index ? {color:'#40bfff'} : {color:'black'}}>{item}</a></li>
          ))}
          
        </ul>
        <span className="slider" style={slide_style}></span>
      </nav>
          <div className="sale_cards">
            <div className="card">
              <div className="view">
                <span className="new">Hot</span>
                <img src="./assets/pic1.png" alt="krasofka" className="picture"/>
                <div className="choose" >
                <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>
                </div>
              </div>
              <div className="info">
                <p className="name">Nike Air Max 270 React</p>
                <img src='./assets/stars.svg' alt="stars" className="stars"/>
                <div className="costs">
                  <span className="r_cost">$234.93</span>
                  <span className="prev_cost">$534.33</span>
                  <span className="percent">24% OFF</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="view">
              <div className="choose">
              <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>
                </div>
                <img src="./assets/pic2.png" alt="krasofka" className="picture"/>
              </div>
              <div className="info">
                <p className="name">Nike Air Max 270 React</p>
                <img src='./assets/stars.svg' alt="stars" className="stars"/>
                <div className="costs">
                  <span className="r_cost">$234.93</span>
                  <span className="prev_cost">$534.33</span>
                  <span className="percent">24% OFF</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="view">
              <div className="choose">
              <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>
                </div>
                <img src="./assets/pic3.png" alt="krasofka" className="picture"/>
              </div>
              <div className="info">
                <p className="name">Nike Air Max 270 React</p>
                <img src='./assets/stars.svg' alt="stars" className="stars"/>
                <div className="costs">
                  <span className="r_cost">$234.93</span>
                  <span className="prev_cost">$534.33</span>
                  <span className="percent">24% OFF</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="view">
              <div className="choose">
              <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>
                </div>
                <img src="./assets/pic4.png" alt="krasofka" className="picture"/>
              </div>
              <div className="info">
                <p className="name">Nike Air Max 270 React</p>
                <img src='./assets/stars.svg' alt="stars" className="stars"/>
                <div className="costs">
                  <span className="r_cost">$234.93</span>
                  <span className="prev_cost">$534.33</span>
                  <span className="percent">24% OFF</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="view">
              <div className="choose">
              <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>
                </div>
                <img src="./assets/pic5.png" alt="krasofka" className="picture"/>
              </div>
              <div className="info">
                <p className="name">Nike Air Max 270 React</p>
                <img src='./assets/stars.svg' alt="stars" className="stars"/>
                <div className="costs">
                  <span className="r_cost">$234.93</span>
                  <span className="prev_cost">$534.33</span>
                  <span className="percent">24% OFF</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="view">
              <div className="choose">
              <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>
                </div>
                <img src="./assets/pic6.png" alt="krasofka" className="picture"/>
              </div>
              <div className="info">
                <p className="name">Nike Air Max 270 React</p>
                <img src='./assets/stars.svg' alt="stars" className="stars"/>
                <div className="costs">
                  <span className="r_cost">$234.93</span>
                  <span className="prev_cost">$534.33</span>
                  <span className="percent">24% OFF</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="view">
              <div className="choose">
              <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>
                </div>
                <img src="./assets/pic7.png" alt="krasofka" className="picture"/>
              </div>
              <div className="info">
                <p className="name">Nike Air Max 270 React</p>
                <img src='./assets/stars.svg' alt="stars" className="stars"/>
                <div className="costs">
                  <span className="r_cost">$234.93</span>
                  <span className="prev_cost">$534.33</span>
                  <span className="percent">24% OFF</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="view">
              <div className="choose">
              <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>
                </div>
                <img src="./assets/pic2.png" alt="krasofka" className="picture"/>
              </div>
              <div className="info">
                <p className="name">Nike Air Max 270 React</p>
                <img src='./assets/stars.svg' alt="stars" className="stars"/>
                <div className="costs">
                  <span className="r_cost">$234.93</span>
                  <span className="prev_cost">$534.33</span>
                  <span className="percent">24% OFF</span>
                </div>
              </div>
            </div>
          </div>
        <div className="load_more" >
          <h2 className="Link">Load More</h2>
          <span className="link_under"></span>
          </div>
          <div className="second_banner">
            <div className="text_side">
              <p className="main_text">Adidas Man runing sneakers</p>
              <p className="mini_text">performace and design. Taken right to the edge</p>
             <div className="wrap_them"> <p className="shop_now">Shop now </p>
              <span className="under_it" style={{width:'100px',height:'5px',backgroundColor:'white'}}></span>
              </div>
            </div>
            <div className="image_side">
              <img src="./assets/view_b.png" className="image" />
            </div>
          </div>
          <div className='additional_info'>
            <div className="info info_1">
              <img src="./assets/shipping.png" alt='shipping' className="logo1"/>
              <p className="name">Free Shipping</p>
              <p>For our customers we have free shipping system, we are so happy to be in touch with you.Thanks for your purchase. </p>
            </div>
            <div className="info info_2">
              <img src="./assets/refund.png" alt="refund"  className="logo2"/>
              <p className="name">100% Refund</p>
              <p>No cheating, we are loyal to our customers. Therefore we have 100% refund,we are so glad working with you .</p>
            </div>
            
            <div className="info info_3">
              <img src="./assets/support.png" alt="support"  className="logo3"/>
              <p className="name">Support 24/7</p>
              <p>our call center is available 24 hours in a day 7 days for a week. You may ask any question related to product</p>
            </div>
          </div>
          <h2 className="News" align='center'>Latest News</h2>
          <div className="latest_news">
            <div className="info">
              <div className="logo"><img src="./assets/nike.png" alt="nike" /></div>
              <div className="text">
                <p className="date">01 Jan 2015</p>
                <p className="name">Fashion Industry</p>
                <p className="text">Nike is the best company at providing high quality sneakers, and all kind of food wears </p>
              </div>
            </div>
            <div className="info">
              <div className="logo"><img src="./assets/figma.png" alt="nike" /></div>
              <div className="text">
                <p className="date">01 Jan 2015</p>
                <p className="name">Best design tool</p>
                <p className="text">Figma is very popular program between web-developers and designers,because it is easy to use. </p>
              </div>
          </div>
          <div className="info">
              <div className="logo"><img src="./assets/kronos.png" alt="kronos" /></div>
              <div className="text">
                <p className="date">01 Jan 2015</p>
                <p className="name">HR community</p>
                <p className="text">For Hr community support supplied by Kronos company</p>
              </div>
            </div>
          </div>
          <h2 className="News" align='center'>Featured Items</h2>
          <div className="featured_items">
          <div className="info">
              <div className="logo"><img src="./assets/vector.png" alt="nike" /></div>
              <div className="text">
                <p className="name">Blue Swade Nike Sneakers</p>
                <img src="./assets/stars.svg" alt="five_star" className="stars" />
                <p className="cost"><span className="r_cost">$450</span> <span className="d_cost">$550</span></p>
              </div>
            </div>
            <div className="info">
              <div className="logo"><img src="./assets/vector.png" alt="nike" /></div>
              <div className="text">
                <p className="name">Blue Swade Nike Sneakers</p>
                <img src="./assets/stars.svg" alt="five_star" className="stars" />
                <p className="cost"><span className="r_cost">$450</span> <span className="d_cost">$550</span></p>
              </div>
            </div>
            <div className="info">
              <div className="logo"><img src="./assets/vector.png" alt="nike" /></div>
              <div className="text">
                <p className="name">Blue Swade Nike Sneakers</p>
                <img src="./assets/stars.svg" alt="five_star" className="stars" />
                <p className="cost"><span className="r_cost">$450</span> <span className="d_cost">$550</span></p>
              </div>
            </div>
          </div>

          <div class="input-group mb-3 search">
  <input type="text" class="form-control input" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <button class="btn btn-outline-secondary submit" type="button" id="button-addon2">Button</button>
</div>


            <div className='footer'>
              <div className='section_1'>

              </div>
              <div className="section_2">

              </div>
              <div className="footer">

              </div>
            </div>


    </>
  );

}



const Item = styled.div`
  position:relative;
`



export default Home;
