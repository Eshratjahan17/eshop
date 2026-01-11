import { Button } from '@mui/material';
const Navigation = () => {
    return ( 
        <nav>
        <div className='container mx-auto max-w-[90%]'>
                <div className='flex items-center  w-full max-w-full'>
                    <div className='w-1/4 navpart1'>
                        <Button className='allCartTab'>
                            <span className='text' > All CATEGORIES</span>
                        </Button>
                    </div>
        
                    <div className='w-3/4  navpart2'></div>
        
                </div>
        
            </div>
        </nav>

      );
}
export default Navigation;