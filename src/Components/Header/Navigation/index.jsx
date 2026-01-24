import { Button } from '@mui/material';
import { MdMenu } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { use, useState } from 'react';



const Navigation = () => {
    const [isopenSidebarVal, setisopenSidebarVal]= useState(false);
    
    return ( 
        <nav>
        <div className='container '>
                <div className='flex items-start justify-center w-full max-w-full'>
                    <div className='w-1/4 navpart1'>
                       <div className='catWrapper'>
                       <Button className='allCartTab ' onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                            <span className='icon1 '><MdMenu></MdMenu> </span>
                            <span className='text ' > All CATEGORIES</span>
                            <span className='icon2 '> <FaAngleDown></FaAngleDown> </span>
                        </Button>
                        <div className={`sidebarNav shadow-xl ${isopenSidebarVal=== true? 'open': ''}`}>
                        <ul>
                        <li><Link className='navlink' to="/"><Button>Men</Button></Link></li>  
                        <li><Link className='navlink' to="/"><Button>Women</Button></Link></li>  
                        <li><Link className='navlink' to="/"><Button>Beauty</Button></Link></li>  
                        <li><Link className='navlink' to="/"><Button>Watches</Button></Link></li>  
                        <li><Link className='navlink' to="/"><Button>Kids</Button></Link></li>  
                        <li><Link className='navlink' to="/"><Button>Gift</Button></Link></li>  
                        <li><Link className='navlink' to="/"><Button>Beauty</Button></Link></li>  
                        <li><Link className='navlink' to="/"><Button>Watches</Button></Link></li>  
                        <li><Link className='navlink' to="/"><Button>Kids</Button></Link></li>  
                        <li><Link className='navlink' to="/"><Button>Gift</Button></Link></li>  
                        </ul>

                        </div>
                       </div>
                    </div>
        
                    <div className='w-2/3  navpart2'>
                        <ul className='flex justify-start items-center'>
                            <li><Link className='navlink' to="/"><Button>Home</Button></Link></li>
                            <li><Link className='navlink' to="/"><Button>Men</Button></Link>
                                          <div className='submenu shadow-xl'>
                                          <Link className='navlink' to="/"><Button>Clothing</Button></Link>
                                          <Link className='navlink' to="/"><Button>Footwear</Button></Link>
                                          <Link className='navlink' to="/"><Button>Watches</Button></Link>
                                         

                                            </div>                      
                                </li>
                            <li><Link className='navlink' to="/"><Button>Women</Button></Link>
                            <div className='submenu shadow-xl'>
                                          <Link className='navlink' to="/"><Button>Clothing</Button></Link>
                                          <Link className='navlink' to="/"><Button>Footwear</Button></Link>
                                          <Link className='navlink' to="/"><Button>Watches</Button></Link>
                                         

                                            </div>     
                            </li>                   
                            <li><Link  className='navlink'to="/"><Button>Beauty</Button></Link></li>
                            <li><Link className='navlink'to="/"><Button>Wathces</Button></Link></li>
                            <li><Link className='navlink'to="/"><Button>Kids</Button></Link></li>
                            <li><Link className='navlink'to="/"><Button>Gifts</Button></Link></li>
                            <li><Link className='navlink'to="/"><Button>Blog</Button></Link></li>
                            <li><Link className='navlink' to="/"><Button>Contact Us</Button></Link></li>
                        


                            
                        </ul>
                    </div>
        
                </div>
        
            </div>
        </nav>

      );
}
export default Navigation;