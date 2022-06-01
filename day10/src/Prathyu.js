import React , {UseState} from 'react'
import './Prathyu.css'
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import Family from './assets/Family.jpeg'
import b1 from './assets/b1.jpeg'
import b2 from './assets/b2.jpeg'
import b3 from './assets/b3.jpeg'
import bum from './assets/bum.jpeg'
import h1 from './assets/h1.jpeg'
import h2 from './assets/h2.jpeg'
import h3 from './assets/h3.jpeg'
import h4 from './assets/h4.jpeg'
import h5 from './assets/h5.jpeg'
import h6 from './assets/h6.jpeg'
import mm from './assets/mm.jpeg'
import liq from './assets/liq.jpeg'
import syn from './assets/syn.jpeg'
import drop from './assets/drop.jpeg'
import follow from './assets/follow.jpeg'
import { AiFillSetting, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsFillPlusCircleFill, BsInstagram,  BsDribbble } from "react-icons/bs";
import f1 from './assets/f1.jpeg'
import f2 from './assets/f2.jpeg'
import f3 from './assets/f3.jpeg'
import f4 from './assets/f4.jpeg'
import f5 from './assets/f5.jpeg'
import logo1 from './assets/logo1.jpeg'
import logo2 from './assets/logo2.jpeg'
import { VscDebugStackframeDot } from "react-icons/vsc";
import { TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialGooglePlusCircular } from "react-icons/ti";





const Prathyu =() => {
    return(
        <div>
        <div className='navbar'>
            <HiOutlineMail className='v'size='20'/>sample@sample.com
        <BsTelephone className='p' size='20'/>00 1234 5678
            <GrGoogle className='r'size='20' />
            <FaPinterestP className='c' size='20'/>
            <BsTwitter className='c' size='20'/>
            <FaFacebookF className='c' size='20'/>
            <BiGlobe className='c' size='20'/>
            </div>
            <div >
                <lable className='a'>WP/</lable>
                <lable className='ch'>Real Estate</lable>
                <lable className='b'>HOME</lable>
                <lable className='c'>ABOUT </lable>
                <lable className='c'>AGENTS</lable>
                <lable className='c'>PROPERTIES</lable>
                <lable className='c'>BLOG</lable>
                <lable className='c'>CONTACT</lable>
                </div>
                
                 <div>
                     <img src={Family} width='1500' height='700'/>
                 </div>
                 <div className='smart'> 
                <div className='lavi1'><h4>If you can dream, we can create it</h4></div> 
                <div className='2'><h1>Find your house without <br />any difficulties</h1></div> 
                <button className='btn btn-outline-light'>Know More</button> 
                 </div> 
                 <div className='arrow'><label>01|05 . . . . . </label><AiOutlineLeft/><AiOutlineRight/></div>  
                
                 <div>
                <div className='logo'>
                <div className='logo1'><img src={mm} alt="money" height="100" width="210"></img></div>
                <div className='logo2'><img src={liq} alt="liquid" height="100" width="200"></img></div>
                <div className='logo3'><img src={syn} alt="synertec" height="100" width="200"></img></div>
                <div className='logo4'><img src={drop} alt="dropawf" height="100" width="200"></img></div>
                <div className='logo5'><img src={follow} alt="follow" height="100" width="200"></img></div>
            </div>
                 
                 <br/>
                 <div>
                     <lable className='d'>WP/</lable>
                     <label className='ac'>Real Estate</label><br/>
                      <lable className='e'>Properties</lable><br/>
                      <lable className='f'>H O M E  F O R  S A L E</lable>
                 </div>

                 <br/>
                 <div className='g'>
                 <img src={b1} width='1000' height='500'/>
                 </div>
                 <br/>
                 <div>
                 <img className='bb' src={b1} width='250' height='250'/>
                <img className='aa'src={b2} width='250' height='250'/>
                 <img className='aa' src={b3} width='250' height='250'/>
                 </div>
                 <div> 
                <label className='h'>Scandinavian style apartment</label><br/> 
                <label className='i'>94-98 Ingraham St,Brooklyn,NY 11237,USA</label> 
                <label className='j'>Lovelace Road Greenfield</label><br/>
                <label className='k'>120 N St SW Thomaston,Georgie(GA),30286  </label>
             
                <label className='l'>Building Complex Apartments</label><br/> 
                <label className='m'>319 Brookmeade Way Lawrenceville,Georgia(GA),30043</label> 
                </div> 
                <hr className='text-muted line'></hr> 
                <div className='add'><BsFillPlusCircleFill size="34" /></div> 
                <div className='add1'>VIEW MORE</div>

                <br/>
                <div > 
                
                <img  className='n'src={bum} width='1500' height='700'/> 
                 <br/>
                 <label className='o'>Beautifully designed,inside </label><br/>
                <label className='o'>and out,Studio looks every bit </label><br/>
                <label className='o'>as powerful as it is.</label>
                <label className='q'>This is Photoshop's version of Lorem Ipsum.Proin gravida nibh vel velit auctor aliquet.</label><br/>
                <label className='q'>Aenean sollicitudin,lorem quits bibendum auctor,nisi elit consequat ipsum,nec sagittis sem</label><br/>
                <label className='q'> nibh id elit.Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</label><br/>
                <label className='pp'>Signature</label><br/>

            <br/>
            
                    
                </div>
                
                    <label className='s'>Our Clients Review</label><br/>
                    <br/>
                <br/>

                    <label className='t'>Duane Neal</label><br/>
                    <label className='u'>Product Designer,USA</label>
                    <br/>
                    <br/>

                     <label className='sa'>I'm a freelance fashion designer who specialises in print designs and combining fabrics.My designs have been sold all over europe and  </label><br/>
                      <label className='ss'> the USA and I have worked with some of the biggest designers in the industry.I'm also currently working with a big supermaeket to </label><br/>
                      <label className='k'> develop a gorgeous,yet afforadable </label>

                      <br/>
                      <br/>
                      <hr className='text-muted line'></hr> 
                <div className='d-flex image'> 
                <div className='f1'><img src={f1} alt="f1" className='rounded-circle' height="100"></img></div> 
                <div className='f2'><img src={f2} alt="f2" className='rounded-circle' height="100" width={100}></img></div> 
                <div className='f3'><img src={f3} alt="f3" className='rounded-circle' height="100" width={100}></img></div> 
                <div className='f4'><img src={f4} alt="f4" className='rounded-circle' height="100" width={100}></img></div> 
                <div className='f5'><img src={f5} alt="f5" className='rounded-circle' height="100" width={100}></img></div> 
                 </div><br /> 
                 <div className='dots'> 
                <span class="dot" onclick="currentSlide(1)"></span> 
                <span class="dot" onclick="currentSlide(2)"></span> 
                <span class="dot" onclick="currentSlide(3)"></span> 
                <span class="dot" onclick="currentSlide(4)"></span> 
                <span class="dot" onclick="currentSlide(5)"></span> 
            </div>
            <br/><br/>
            <div className='d-flex'> 
            <div className='house1'><img src={h1} height="600" width="450" alt="h1"></img></div>            
            <div className='house2'><img src={h2} height="300" width="240" alt="h2"></img></div> 
            <div className='house3'><img src={h3} height="300" width="240" alt="h3"></img></div> 
            </div> 
            <div className='d-flex'> 
            <div className='house4'><img src={h4} height="290" width="240" alt="h4"></img></div> 
            <div className='house5'><img src={h5} height="290" width="240" alt="h5"></img></div> 
            </div>
            <div className='house1_1'>Loream ipsum is simply dummy text of <br/>the printing and typesetting</div> 
            <hr className='house1_2'></hr> 
            <div className='house1_3'>13 March,2020</div> 
            <div className='house1_4'>Contrarty to popular belief, Loream ipsum is not simply random text.<br/> 
            It has roots in a piece of classical latin literature from</div> 
            <div className='house2_1'>There are many variations of<br/>passages of Loream ipsum</div> 
            <hr  className='house2_2'></hr> 
            <div className='house2_3'>13 March,2020</div> 
            <div className='house3_1'>There are many variations of<br/>passages of Loream ipsum</div> 
            <hr  className='house3_2'></hr> 
            <div className='house3_3'>13 March,2020</div> 
            <div className='house4_1'>There are many variations of<br/>passages of Loream ipsum</div> 
            <hr  className='house4_2'></hr> 
            <div className='house4_3'>13 March,2020</div> 
            <div className='house5_1'>There are many variations of<br/>passages of Loream ipsum</div> 
            <hr className='house5_2'></hr>  
            <div className='house5_3'>13 March,2020</div>


                         <br/>
                           <br/>
                      <div className='navbar1'>
                          <lable className='cc'>Every thing is about to change.</lable>
                          <br/>
                          <br/>

                          <label className='dd'>Lorem ipsum dolor shit amet,consectetur adipisicing elit,sed do elusmod tempor incididunt ut labore et dolore</label><br/>
                          <label className='ee'>magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation ullamco labories.</label><br/>
                          <br/>
                          
                          <input className='ff' placeholder='Email Address'></input>
                          <input className='gg' placeholder='SUBSCRIBE'></input>
                          </div>
                          

                          <div className='street'><img src={h6} alt="street" height="350" width="1520"></img></div> 
            <div className='d-flex'><div className='wpl'>wp/</div><div className='real'>Real Estate</div></div> 
            <div className='title'> 
                <div className='homes'>HOME</div> 
                <div className='abouts'>ABOUT</div> 
                <div className='agentss'>AGENTS</div> 
                <div className='props'> PROPERTIES</div> 
                <div className='blogs'>BLOG</div> 
                <div className='contacts'>CONTACT</div> 
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='d-flex'> 
                <div className='detail1'> 
                <div className='font_size'><b>ABOUT</b></div> 
                <div className='font_color'> 
                <div>ABOUT STUDIO</div>&nbsp; 
                <div>JOBS</div>&nbsp; 
                <div>TEAMS</div>&nbsp; 
                <div>SECURITY</div> 
                </div></div> 
                <div className='detail2'> 
                <div className='font_size'><b>INFORMATION</b></div> 
                <div className='font_color'> 
                <div>CUSTOMER SERVICE</div>&nbsp; 
                <div>LEGAL INFORMATION</div>&nbsp; 
                <div>SUPPORT</div>&nbsp; 
                <div>FAQ</div> 
                </div></div> 
                <div className='detail3'> 
                <div className='font_size'><b>RECENT NEWS</b></div> 
                <div className='font_color'> 
                <div className='d-flex'><img src={logo1} height="60px" alt="logo1"></img>&nbsp;Proin eros nisl ornare sed<br/>&nbsp; vehicula sit amet, feugiat<br/>&nbsp;Aug 12 | 2017</div>&nbsp; 
                <div className='d-flex'><img src={logo2} height="60px" alt="logo2"></img>&nbsp;Morbi placerat accumsan <br/>&nbsp;nunc, luctus lacinia nis <br/>&nbsp;Aug 12 | 2017</div> 
                </div></div> 
                <div className='detail4'> 
                    <div className='font_size'><b>GET IN TOUCH</b></div> 
                    <div className='font_color'> 
                    <div><VscDebugStackframeDot/>&nbsp;San Fransisco, CA<br/>&nbsp;&nbsp;125, california, STP 2 Building</div>&nbsp; 
                    <div><VscDebugStackframeDot/>&nbsp;www.studiotheme.com</div>&nbsp; 
                    <div><VscDebugStackframeDot/>&nbsp;+123 5645 8934</div> 
                </div></div>
                </div>
               </div>

         </div>
    )
}

export default Prathyu;