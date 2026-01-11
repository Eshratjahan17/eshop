import { IoSearchSharp } from "react-icons/io5";
import { Button } from '@mui/material';

const SearchBox = () => {
    return (
        <div className='headerSearch'>
                    <input type="text" placeholder='Search for products...' />
                    <Button type='submit'><IoSearchSharp></IoSearchSharp></Button>
                </div>
    )
}

export default SearchBox;