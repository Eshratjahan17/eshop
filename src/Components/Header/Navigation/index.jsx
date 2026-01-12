import { Button } from '@mui/material';
import { MdMenu } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Navigation = () => {
    return ( 
        <nav>
        <div className='container mx-auto max-w-[90%]'>
                <div className='flex items-center justify-center w-full max-w-full'>
                    <div className='w-1/4 navpart1'>
                        <Button className='allCartTab '>
                            <span className='icon1 '><MdMenu></MdMenu> </span>
                            <span className='text ' > All CATEGORIES</span>
                            <span className='icon2 '> <FaAngleDown></FaAngleDown> </span>
                        </Button>
                    </div>
        
                    <div className=':w-full  navpart2'>
                        <ul className='flex justify-end items-center'>
                            <li><Link className='navlink' to="/">Home</Link></li>
                            <li><Link className='navlink' to="/">Fashion</Link></li>
                            <li><Link className='navlink' to="/">Electronic</Link></li>                   
                            <li><Link  className='navlink'to="/">Bakery</Link></li>
                            <li><Link className='navlink'to="/">Grocery</Link></li>
                            <li><Link className='navlink'to="/">Blog</Link></li>
                            <li><Link className='navlink' to="/">Contact Us</Link></li>


                            
                        </ul>
                    </div>
        
                </div>
        
            </div>
        </nav>

      );
}
export default Navigation;