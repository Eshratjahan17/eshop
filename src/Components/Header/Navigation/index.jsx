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
        
                    <div className='w-2/3  navpart2'>
                        <ul className='flex justify-start items-center'>
                            <li><Button><Link className='navlink' to="/">Home</Link></Button></li>
                            <li><Button><Link className='navlink' to="/">Fashion</Link></Button></li>
                            <li><Button><Link className='navlink' to="/">Electronic</Link></Button></li>                   
                            <li><Button><Link  className='navlink'to="/">Bakery</Link></Button></li>
                            <li><Button><Link className='navlink'to="/">Grocery</Link></Button></li>
                            <li><Button><Link className='navlink'to="/">Blog</Link></Button></li>
                            <li><Button><Link className='navlink' to="/">Contact Us</Link></Button></li>
                        


                            
                        </ul>
                    </div>
        
                </div>
        
            </div>
        </nav>

      );
}
export default Navigation;