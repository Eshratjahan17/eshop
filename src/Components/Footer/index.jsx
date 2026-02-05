import { RiDiscountPercentFill } from "react-icons/ri";
import { BiSolidTShirt } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { LuBadgeDollarSign } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import Link from "@mui/material/Link";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";



const Footer =() =>{
    return(
        <footer >
        <div className="container">
            <div className="topinfo grid grid-cols-4 gap-4 items-center justify-items-center" >
                <div className="flex items-center gap-2 info">
                <span><BiSolidTShirt /></span>
                <span className="">Everyday Fresh Products</span>  
                </div>
                <div className="flex items-center gap-2 info">
                <span><TbTruckDelivery /></span>
                <span className="">Free delivery for order over $70</span>  
                </div>
                <div className="flex items-center gap-2 info">
                <span><RiDiscountPercentFill /></span>
                <span className="">Daily Mega Discounts</span>  
                </div>
                <div className="flex items-center gap-2 info">
                <span><LuBadgeDollarSign />
                </span>
                <span className="">Best price on the market</span>  
                </div>
           
            </div>
            <div className="grid grid-cols-5 gap-7 justify-items-center  mt-4 linksWrap">
            <div className="">
                <h5>FRUIT & VEGETABLES</h5>
                <ul>
                    <li>Fresh Vegetables</li>
                    <li>Herbs & Seasonings</li>
                    <li>Fresh Fruits</li>
                    <li>Packaged Produce</li>
                    <li>Organic Fruits & Veggies</li>
                </ul>
            </div>
            <div className="">
                <h5>FRUIT & VEGETABLES</h5>
                <ul>
                    <li>Fresh Vegetables</li>
                    <li>Herbs & Seasonings</li>
                    <li>Fresh Fruits</li>
                    <li>Packaged Produce</li>
                    <li>Organic Fruits & Veggies</li>
                </ul>
            </div>
            <div className="">
                <h5>FRUIT & VEGETABLES</h5>
                <ul>
                    <li>Fresh Vegetables</li>
                    <li>Herbs & Seasonings</li>
                    <li>Fresh Fruits</li>
                    <li>Packaged Produce</li>
                    <li>Organic Fruits & Veggies</li>
                </ul>
            </div>
            <div className="">
                <h5>FRUIT & VEGETABLES</h5>
                <ul>
                    <li>Fresh Vegetables</li>
                    <li>Herbs & Seasonings</li>
                    <li>Fresh Fruits</li>
                    <li>Packaged Produce</li>
                    <li>Organic Fruits & Veggies</li>
                </ul>
            </div>
            <div className="">
                <h5>FRUIT & VEGETABLES</h5>
                <ul>
                    <li>Fresh Vegetables</li>
                    <li>Herbs & Seasonings</li>
                    <li>Fresh Fruits</li>
                    <li>Packaged Produce</li>
                    <li>Organic Fruits & Veggies</li>
                </ul>
            </div>
            
        </div>


        <div className="copyright flex justify-between items-center ">
       
       <p> Copyright 2024. All rights reserved</p>
       <ul className="list-none flex gap-4">
           <li className="inline-block">
              <Link to="#"> <FaFacebook />
              </Link>
           </li>
           <li className="inline-block">
              <Link to="#"> <FaTwitter />
              </Link>
           </li>
           <li className="inline-block">
              <Link to="#"> <GrInstagram />

              </Link>
           </li>

       </ul>
      

       </div>
            
              
        
        
        
        
        </div>

      

      

      </footer>
    )
}

export default Footer;