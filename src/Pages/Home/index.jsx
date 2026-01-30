import Button from "@mui/material/Button";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/Images/banner1.jpg";
import banner2 from "../../assets/Images/banner2.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem/ProductItem";
import HomeCat from "../../Components/HomeCat";

const Home = () => {
  
    return <>
       
    <HomeBanner></HomeBanner>
    <HomeCat></HomeCat>
    <section className="homeProducts">
        <div className="container" >
            <div className="flex items-start justify-center gap-4">
                <div className="w-1/4">
                    <div className="banner">
                        <img src={banner1} alt="" className="cursor" />
                    </div>
                    <div className="banner mt-4">
                        <img src={banner2} alt="" className="cursor" />
                    </div>
                </div>

                <div className="w-2/3 productRow ">
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
                            <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                            <p className="text-light text-sml ">New products with updated stocks.



                            </p>
                           
                        </div>
                       
                        <Button className="viewAllbtn " sx={{ ml: 'auto' }}>View All<IoIosArrowRoundForward /></Button>

                       
                      </div>
                      <div className="product_row  mt-4">
                     
                    <Swiper slidesPerView={4}
                    spaceBetween={0}
                    pagination={{clickable:true}}
                    navigation={true} modules={[Navigation]} className="mySwiper">
                         
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
                </div>
            </div>
        </div>
    </section>
    </>;
}
export default Home;