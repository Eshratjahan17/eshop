import Button from "@mui/material/Button";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/Images/banner1.jpg";
import banner2 from "../../assets/Images/banner2.jpg";
import banner3 from "../../assets/Images/banner3.png";
import banner4 from "../../assets/Images/banner4.png";
import banner5 from "../../assets/Images/newsletter.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem/ProductItem";
import HomeCat from "../../Components/HomeCat";
import { CiMail } from "react-icons/ci";



const Home = () => {
  
    return <>
       
    <HomeBanner></HomeBanner>
    <HomeCat></HomeCat>
    <section className="homeProducts">
        <div className="container" >
            <div className="flex items-start gap-4 ">
                <div className="w-3/12 stickyBanner ml-2  ">
                   <div className="  ">
                   <div className="banner ">
                        <img src={banner1} alt="" className="cursor w-full" />
                    </div>
                    <div className="banner mt-4 ">
                        <img src={banner2} alt="" className="cursor w-full" />
                    </div>
                   </div>
                </div>

                <div className="w-9/12 productRow ">
                      <div className="flex items-center">
                        <div className="info">
                            <h3 className="mb-0 hd">BEST SELLERS</h3>
                            <p className="text-light text-sml ">Do not miss the current offers until the end of March.

                            </p>
                           
                        </div>
                       
                        <Button className="viewAllbtn " sx={{ ml: 'auto' }}>View All<IoIosArrowRoundForward /></Button>

                       
                      </div>
                      <div className="product_row  mt-4">
                     
                    <Swiper slidesPerView={4}
                    spaceBetween={0}
                    navigation={true} 
                    slidesPerGroup={1}
                    modules={[Navigation]} className="mySwiper">
                         
                            <SwiperSlide>
                                
                               <ProductItem></ProductItem>
                            
                            </SwiperSlide>
                            <SwiperSlide>
                            <ProductItem></ProductItem>
                            
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductItem></ProductItem>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                            <ProductItem></ProductItem>
                            
                            </SwiperSlide>
                            <SwiperSlide>
                            <ProductItem></ProductItem>
                            
                            </SwiperSlide>
                            <SwiperSlide>
                            <ProductItem></ProductItem>
                            </SwiperSlide>
                           
                           
                         </Swiper>

                      </div>


                      <div className="flex items-center ">
                        <div className="info">
                            <h3 className=" hd">NEW PRODUCTS</h3>
                            <p className="text-light text-sml ">New products with updated stocks.



                            </p>
                           
                        </div>
                       
                        <Button className="viewAllbtn " sx={{ ml: 'auto' }}>View All<IoIosArrowRoundForward /></Button>

                       
                      </div>
                      <div className="product_row productRow2 mt-4 flex">
                     
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>

                      </div>
                      <div className="flex bannerSec gap-5 ">
                      <div className="banner">
                    <img src={banner3} alt="" className="cursor-pointer" />
                    </div>
                    <div className="banner ">
                        <img src={banner4} alt="" className="cursor-pointer" />
                    </div>
                      </div>
                </div>
            </div>
        </div>
    </section>

    <section className="newslatterSction flex items-center">
        <div className="container">
            <div className="flex flex-wrap">
            <div class="w-1/2">
            <p className="text-white ">$20 discount for your first order</p>
            <h3 className="text-white" > Join our newsletter and get...</h3>
            <p className=" text-gray-400 textLight">Join our email subscription now to get updates on
               <br/> promotions and coupons </p>
            <form >
                <CiMail />
                <input type="text" name="" id="" placeholder="Your Email Address"/>
                <Button className="subscribeBtn" >Subscribe</Button>
            </form>
            </div>
            <div class="w-1/2 newslatterImg">
            <img src={banner5} alt="Newslatter image" />
            <br />
            </div>
            </div>
        </div>
    </section>
    </>;
}
export default Home;