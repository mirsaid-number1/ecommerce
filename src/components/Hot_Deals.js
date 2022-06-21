import React,{useState,useRef} from 'react'
import { Icon } from '@iconify/react';

function Hot_Deals() {
  let [hover, setHover] = useState({love:true,trolley:true});
  let [cardsType, setCardsType] = useState(false);

  return (<>
  <main className="main" >
      <div className="sidebar">
      <Icon icon="akar-icons:arrow-right" color="black" width="25" height="25" className='arrow_open'/>
      <Icon icon="akar-icons:arrow-left" color="black" width="25" height="25" className='arrow_close'/>
      <div className="info">
          <ul className="block1">
            <li className="head">Hot Deals</li>
            <li className="item item1">
              <span className="name">Nike</span>
              <span className="number">2</span>
            </li>
            <li className="item item2">
              <span className="name">Airmax</span>
              <span className="number">48</span>
            </li>
            <li className="item item3">
              <span className="name">Nike</span>
              <span className="number">34</span>
            </li>
            <li className="item item4">
              <span className="name">Adidas</span>
              <span className="number">15</span>
            </li>
            <li className="item item5">
              <span className="name">Vans</span>
              <span className="number">23</span>
            </li>
            <li className="item item6">
              <span className="name">All stars</span>
              <span className="number">1</span>
            </li>
            <li className="item item7">
              <span className="name">Adidas</span>
              <span className="number">95</span>
            </li>
          
          </ul>
          <div className="block2">
            <div className="head">Prices</div>
            <div className="range">
              <span className="range1">Range:</span>
              <span className="sum">$13.99 - $25.99</span>
            </div>
            <div className="linear">
              <span className="linear1"></span>
              <span className="linear2"></span>
              <span className="linear3"></span>
            </div>
            <div className='wrapper'>
              <div className='inputs'>

              </div>
            </div>
          </div>
          <div className="block3">
            <div className="head">Color</div>
            <div className="colors">
            <button className="circle blue"></button>
            <button className="circle red"></button>
            <button className="circle black"></button>
            <button className="circle yellow"></button>
            <button className="circle purple"></button>
            <button className="circle ligtpurple"></button>
            </div>
          </div>
          <ul className="block4">
            <li className="head">Brands</li>
            <li className="item item1">
              <div className="name">Nike</div>
              <div className="number">99</div>
            </li>
            <li className="item item2">
              <div className="name">Nike</div>
              <div className="number">99</div>
            </li><li className="item item3">
              <div className="name">Adidas</div>
              <div className="number">99</div>
            </li><li className="item item4">
              <div className="name">Siemens</div>
              <div className="number">99</div>
            </li>
          </ul>
          <div className="block5">More</div>
        </div>
      </div>
      <div className='mobile_sidebar'>
        
      </div>
      <div className='centure'>
        <div className="info">
          <ul className="block1">
            <li className="head">Hot Deals</li>
            <li className="item item1">
              <span className="name">Nike</span>
              <span className="number">2</span>
            </li>
            <li className="item item2">
              <span className="name">Airmax</span>
              <span className="number">48</span>
            </li>
            <li className="item item3">
              <span className="name">Nike</span>
              <span className="number">34</span>
            </li>
            <li className="item item4">
              <span className="name">Adidas</span>
              <span className="number">15</span>
            </li>
            <li className="item item5">
              <span className="name">Vans</span>
              <span className="number">23</span>
            </li>
            <li className="item item6">
              <span className="name">All stars</span>
              <span className="number">1</span>
            </li>
            <li className="item item7">
              <span className="name">Adidas</span>
              <span className="number">95</span>
            </li>
          
          </ul>
          <div className="block2">
            <div className="head">Prices</div>
            <div className="range">
              <span className="range1">Range:</span>
              <span className="sum">$13.99 - $25.99</span>
            </div>
            <div className="linear">
              <span className="linear1"></span>
              <span className="linear2"></span>
              <span className="linear3"></span>
            </div>
            <div className='wrapper'>
              <div className='inputs'>

              </div>
            </div>
          </div>
          <div className="block3">
            <div className="head">Color</div>
            <div className="colors">
            <button className="circle blue"></button>
            <button className="circle red"></button>
            <button className="circle black"></button>
            <button className="circle yellow"></button>
            <button className="circle purple"></button>
            <button className="circle ligtpurple"></button>
            </div>
          </div>
          <ul className="block4">
            <li className="head">Brands</li>
            <li className="item item1">
              <div className="name">Nike</div>
              <div className="number">99</div>
            </li>
            <li className="item item2">
              <div className="name">Nike</div>
              <div className="number">99</div>
            </li><li className="item item3">
              <div className="name">Adidas</div>
              <div className="number">99</div>
            </li><li className="item item4">
              <div className="name">Siemens</div>
              <div className="number">99</div>
            </li>
          </ul>
          <div className="block5">More</div>
        </div>
        <div className="view">
          <div className="banner">
            <div className="text">
              <h2>Adidas Men Running Sneakers</h2>
              Perfomance and design. Taken right to the edge
              <div className="wrap_them"> <p className="shop_now">Shop now </p>
              <span className="under_it" style={{width:'100px',height:'5px',backgroundColor:'white'}} ></span>
              </div>
            </div>
            <img src="./assets/view_b.png" alt="trainer #one" className="image"/>
          </div>
          <div className="nav">
          <ul className="nav1">
            <li className="elem">13 Items</li>
            <li  className="elem">
              Sort By
            <select className="pro-select" name="currency" id="currency">
                        <option className="name_option" value="name">Name</option>
                        <option className="name_option" value="adidas">Adidas</option>
                    </select>
                    </li>
                    
                    <li className="elem">
                      Show Num
                      <select className="pro-select" name="currency" id="currency">
                        <option className="name_option" value="name">12</option>
                        <option className="name_option" value="24">24</option>
                        <option className="name_option" value="28">28</option>
                        <option className="name_option" value="32">32</option>
                    </select>
                    </li>
                  </ul>
                  <div className="menu">
                  <Icon icon="fe:app-menu" color={cardsType ? "black" : '#40bfff'} width="25" height="25" onClick={() => setCardsType(prev => !prev)}/>
                  <Icon icon="eva:menu-outline" color={cardsType ? '#40bfff' : 'black'} width="25" height="25" onClick={() => setCardsType(prev => !prev)}/>
                  </div>
</div>
            
              <div className="product_cards" ref={focus} style={{display: cardsType ? 'none' : 'grid'}}>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic1.png" alt="krasofka" className="main_image" />
                    <span className="new">Hot</span>
                    <div className="buy">
                      <div className="choose">
                      <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>
                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h3 className='name'>Nike Air Max 270 React</h3>
                    <img src="./assets/stars.svg" alt="stars" />
                    <div className="add">
                      <span className="cost">$299,43</span>
                      <span className="rcost">$534,33</span>
                      <span className="dis">24% Off</span>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic2.png" alt="krasofka" className="main_image" />
                    <span className="new">Hot</span>                    
                    <div className="buy">
                      <div className="choose">
                      <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>

                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h3 className='name'>Nike Air Max 270 React</h3>
                    <img src="./assets/stars.svg" alt="stars" />
                    <div className="add">
                      <span className="cost">$299,43</span>
                      <span className="rcost">$534,33</span>
                      <span className="dis">24% Off</span>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic3.png" alt="krasofka" className="main_image" />
                    <span className="new">Hot</span>
                    <div className="buy">
                      <div className="choose">
                      <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>

                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h3 className='name'>Nike Air Max 270 React</h3>
                    <img src="./assets/stars.svg" alt="stars" />
                    <div className="add">
                      <span className="cost">$299,43</span>
                      <span className="rcost">$534,33</span>
                      <span className="dis">24% Off</span>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic4.png" alt="krasofka" className="main_image" />
                    <span className='new'>Hot</span>
                    <div className="buy">
                      <div className="choose">
                      <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>

                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h3 className='name'>Nike Air Max 270 React</h3>
                    <img src="./assets/stars.svg" alt="stars" />
                    <div className="add">
                      <span className="cost">$299,43</span>
                      <span className="rcost">$534,33</span>
                      <span className="dis">24% Off</span>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic5.png" alt="krasofka" className="main_image" />
                    <span className='new'>Hot</span>
                    <div className="buy">
                      <div className="choose">
                      <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>

                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h3 className='name'>Nike Air Max 270 React</h3>
                    <img src="./assets/stars.svg" alt="stars" />
                    <div className="add">
                      <span className="cost">$299,43</span>
                      <span className="rcost">$534,33</span>
                      <span className="dis">24% Off</span>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic6.png" alt="krasofka" className="main_image" />
                    <span className='new'>Hot</span>
                    <div className="buy">
                      <div className="choose">
                      <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>

                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h3 className='name'>Nike Air Max 270 React</h3>
                    <img src="./assets/stars.svg" alt="stars" />
                    <div className="add">
                      <span className="cost">$299,43</span>
                      <span className="rcost">$534,33</span>
                      <span className="dis">24% Off</span>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic6.png" alt="krasofka" className="main_image" />
                    <span className='new'>Hot</span>
                    <div className="buy">
                      <div className="choose">
                      <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>

                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h3 className='name'>Nike Air Max 270 React</h3>
                    <img src="./assets/stars.svg" alt="stars" />
                    <div className="add">
                      <span className="cost">$299,43</span>
                      <span className="rcost">$534,33</span>
                      <span className="dis">24% Off</span>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic7.png" alt="krasofka" className="main_image" />
                    <span className='new'>Hot</span>
                    <div className="buy">
                      <div className="choose">
                      <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>

                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h3 className='name'>Nike Air Max 270 React</h3>
                    <img src="./assets/stars.svg" alt="stars" />
                    <div className="add">
                      <span className="cost">$299,43</span>
                      <span className="rcost">$534,33</span>
                      <span className="dis">24% Off</span>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic3.png" alt="krasofka" className="main_image" />
                    <span className='new'>Hot</span>
                   <div className="buy">
                      <div className="choose">
                      <Icon icon="akar-icons:heart" color={hover.love ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,love:false})} onMouseOut={(e) => setHover({...hover,love:true})} className='icon'/>
                <Icon icon="wpf:luggage-trolley" color={hover.trolley ?  'black' : "#40bfff"} width="25" height="25" onMouseOver={(e) => setHover({...hover,trolley:false})} onMouseOut={(e) => setHover({...hover,trolley:true})} className='icon'/>

                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <h3 className='name'>Nike Air Max 270 React</h3>
                    <img src="./assets/stars.svg" alt="stars" />
                    <div className="add">
                      <span className="cost">$299,43</span>
                      <span className="rcost">$534,33</span>
                      <span className="dis">24% Off</span>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="product_cards2" style={{display: cardsType ? 'flex' : 'none'}}>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic1.png" alt="krasofka" className="main_image" />
                    <span className='new'>Hot</span>
                </div>
                <div className="text">
                  <h3 className='name'>Nike Air Max 270 React</h3>
                  <div className="mark">
                    <img src="./assets/stars.svg" alt="rate us" />
                    <span className="reviews">0 reviews</span>
                    <span className="submit_re"> Submit a review</span>
                  </div>
                  <div className="cost">
                    <span className="r_cost">$299,43</span>
                    <span className="d_cost">$534,43</span>
                    <span className="dis_per">24% off</span>
                  </div>
                  <div className="inner_text">
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...
                  </div>
                  <div className="final">
                  <div className='buy'>  <Icon icon="wpf:luggage-trolley" color={"#40bfff"} width="25" height="25" className='icon'/> Add to card</div>
                  <div className='like'><Icon icon="akar-icons:heart" color={"#40bfff"} width="25" height="25"  className='icon'/></div>
                  </div>
                </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic2.png" alt="krasofka" className="main_image" />
                    <span className='new'>Hot</span>
                </div>
                <div className="text">
                  <h3 className='name'>Nike Air Max 270 React</h3>
                  <div className="mark">
                    <img src="./assets/stars.svg" alt="rate us" />
                    <span className="reviews">0 reviews</span>
                    <span className="submit_re"> Submit a review</span>
                  </div>
                  <div className="cost">
                    <span className="r_cost">$299,43</span>
                    <span className="d_cost">$534,43</span>
                    <span className="dis_per">24% off</span>
                  </div>
                  <div className="inner_text">
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...
                  </div>
                  <div className="final">      
                  <div className='buy'>  <Icon icon="wpf:luggage-trolley" color={"#40bfff"} width="25" height="25" className='icon'/> Add to card</div>
                  <div className='like'><Icon icon="akar-icons:heart" color={"#40bfff"} width="25" height="25"  className='icon'/></div>
                  </div>
                </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic3.png" alt="krasofka" className="main_image" />
                    <span className='new'>Hot</span>
                </div>
                <div className="text">
                  <h3 className='name'>Nike Air Max 270 React</h3>
                  <div className="mark">
                    <img src="./assets/stars.svg" alt="rate us" />
                    <span className="reviews">0 reviews</span>
                    <span className="submit_re"> Submit a review</span>
                  </div>
                  <div className="cost">
                    <span className="r_cost">$299,43</span>
                    <span className="d_cost">$534,43</span>
                    <span className="dis_per">24% off</span>
                  </div>
                  <div className="inner_text">
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...
                  </div>
                  <div className="final">
                    
                  <div className='buy'>  <Icon icon="wpf:luggage-trolley" color={"#40bfff"} width="25" height="25" className='icon'/> Add to card</div>
                  <div className='like'><Icon icon="akar-icons:heart" color={"#40bfff"} width="25" height="25"  className='icon'/></div>
                  </div>
                </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic4.png" alt="krasofka" className="main_image" />
                    <span className='new'>Hot</span>
                </div>
                <div className="text">
                  <h3 className='name'>Nike Air Max 270 React</h3>
                  <div className="mark">
                    <img src="./assets/stars.svg" alt="rate us" />
                    <span className="reviews">0 reviews</span>
                    <span className="submit_re"> Submit a review</span>
                  </div>
                  <div className="cost">
                    <span className="r_cost">$299,43</span>
                    <span className="d_cost">$534,43</span>
                    <span className="dis_per">24% off</span>
                  </div>
                  <div className="inner_text">
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...
                  </div>
                  <div className="final">
                    
                  <div className='buy'>  <Icon icon="wpf:luggage-trolley" color={"#40bfff"} width="25" height="25" className='icon'/> Add to card</div>
                  <div className='like'><Icon icon="akar-icons:heart" color={"#40bfff"} width="25" height="25"  className='icon'/></div>
                  </div>
                </div>
                </div>
                <div className="cards">
                  <div className="view">
                    <img src="./assets/pic5.png" alt="krasofka" className="main_image" />
                    <span className='new'>Hot</span>
                </div>
                <div className="text">
                  <h3 className='name'>Nike Air Max 270 React</h3>
                  <div className="mark">
                    <img src="./assets/stars.svg" alt="rate us" />
                    <span className="reviews">0 reviews</span>
                    <span className="submit_re"> Submit a review</span>
                  </div>
                  <div className="cost">
                    <span className="r_cost">$299,43</span>
                    <span className="d_cost">$534,43</span>
                    <span className="dis_per">24% off</span>
                  </div>
                  <div className="inner_text">
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...
                  </div>
                  <div className="final">
                    
                  <div className='buy'>  <Icon icon="wpf:luggage-trolley" color={"#40bfff"} width="25" height="25" className='icon'/> Add to card</div>
                  <div className='like'><Icon icon="akar-icons:heart" color={"#40bfff"} width="25" height="25"  className='icon'/></div>
                  </div>
                </div>
                </div>
              </div>
            
              <div className="pagination">
                <div className="nums">
                <span className="ordinary" id="one">1</span>
                <span className="chose" id="two">2</span>
                <span className="ordinary" id='three'>3</span>
                <span className="ordinary" id="four">4</span>
                <span className="ordinary" id="five">5</span>
                </div>
              </div>
          </div>
          </div>
    </main>
  </>)
};
export default Hot_Deals;