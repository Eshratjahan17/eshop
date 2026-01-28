import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";


const ProductItem =()=>{
    return (
        <div className="item productItem">
        <div className="imgWrapper">
         <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" alt=""  />
         
         <span class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30 badge-primary badge">28%</span>
            <div className='actions'>
                <Button><TfiFullscreen /></Button>
                <Button><IoIosHeartEmpty /></Button>
            </div>
        </div>
        <div className="info">
        <h4>A-Line Kurti With Sharara & Dupatta</h4>
        <span  className="text-green-600 block">In Stock</span>
        <Rating className="ratings" size="small" precision={0.5} name="read-only" value={5} readOnly />
        <div className="flex  gap-2 ">
         <span className="oldPrice">$20.00</span>
         <span className="netPrice text-red-500">$14.00</span>

          </div>
        </div>
        
        
     </div>
    );
}

export default ProductItem;