import { Link } from 'react-router-dom';
import Logo from '../../assets/Images/ecom.png';
import CountryDropDown from '../CountryDropDown';
import { Button } from '@mui/material';
import { LuUser } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';




const Header = () => {
    const context=useContext(MyContext);
    return  <div className="headerWrapper">
    <div className="top-strip bg-green-800 ">
        <div className="container">
            <p className="mb-0 mt-0 text-center ">
            New Year Special! Get 10% OFF on all orders | Use code: NEWYEAR2026
            </p>
        </div>
    </div>
    <header className="header">
        <div className="container">
            <div className="flex items-center justify-center">
                <div className="logowrapper  w-24">
                   <Link  to ={'/'}><img src={Logo} alt="logo" /></Link>
                </div>
                <div className='sm:w-5/6 flex items-center part2 '>
                {
                    context.countryList.length !==0 &&  <CountryDropDown />
                }
               
                <SearchBox/>
        
                <div className='part3 flex items-center gap-4'>
                <Button className='circle' type='submit'><LuUser /></Button>
                <div className='ml-auto cartTab flex items-center '>
                    <span className='price'>$3.29</span>
                    <div className='relative ml-2'>
                    <Button className='circle' type='submit'><BsCart2 /></Button>
                    <span className='count flex items-center justify-center'>1</span>
                    </div>
                </div>
                </div>

                </div>

            </div>

        </div>
    </header>
<Navigation></Navigation>
   
</div>

    };
export default Header;