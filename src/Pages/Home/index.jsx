import Button from "@mui/material/Button";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/Images/banner1.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Rating from '@mui/material/Rating';
import { Navigation } from 'swiper/modules';

const Home = () => {
  
    return <div>
    <HomeBanner></HomeBanner>
    <section className="homeProducts">
        <div className="container" >
            <div className="flex items-start justify-center gap-4">
                <div className="w-1/4">
                    <div className="banner">
                        <img src={banner1} alt="" className="cursor" />
                    </div>
                </div>

                <div className="w-2/3 productRow ">
                      <div className="flex items-center">
                        <div className="info">
                            <h3 className="mb-0 hd">BEST SELLERS</h3>
                            <p className="text-light text-sml">Do not miss the current offers until the end of March.

                            </p>
                           
                        </div>
                       
                        <Button className="viewAllbtn " sx={{ ml: 'auto' }}>View All<IoIosArrowRoundForward /></Button>

                       
                      </div>
                      <div className="product_row  mt-4">
                     
                    <Swiper slidesPerView={4}
                    spaceBetween={30}
                    pagination={{clickable:true}}
                    navigation={true} modules={[Navigation]} className="mySwiper">
                         
                            <SwiperSlide><div className="item productItem">
                               <div className="imgWrapper">
                                <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" alt=""  />
                               
                               </div>
                               <h4>A-Line Kurti With Sharara & Dupatta</h4>
                               <span className="">In Stock</span>
                               <Rating name="read-only" value={5} readOnly />
                               
                            </div></SwiperSlide>
                          <SwiperSlide><div className="item productItem">
                               <div className="imgWrapper">
                                <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" alt="" />
                               </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="item productItem">
                               <div className="imgWrapper">
                                <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" alt=""  />
                               </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="item productItem">
                               <div className="imgWrapper">
                                <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" alt="" />
                               </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="item productItem">
                               <div className="imgWrapper">
                                <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" alt="" />
                               </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="item productItem">
                               <div className="imgWrapper">
                                <img src="https://api.spicezgold.com/download/file_1734529297930_fiorra-women-s-teapot-blue-pure-cotton-a-line-kurta-with-sharara-and-dupatta-product-images-rvo9n8udfg-1-202307260626.jpg" alt=""  />
                               </div>
                            </div></SwiperSlide>
                           
                           
                         </Swiper>

                      </div>
                </div>
            </div>
        </div>
    </section>
    </div>;
}
export default Home;