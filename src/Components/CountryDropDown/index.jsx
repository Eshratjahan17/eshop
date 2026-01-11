import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
const CountryDropDown = () => {
    return(
        <>
        <Button className='countrydrop'>
                    <div className='info flex flex-col '>
                    <span className='label'>Your Location</span>
                    <span className='name'>Bangladesh</span>
                </div>
                <span className='ml-auto'> <FaAngleDown></FaAngleDown> </span>
                </Button>
        </>
    )

}
export default CountryDropDown;