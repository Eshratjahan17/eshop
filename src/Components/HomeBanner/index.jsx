import React from "react";
import Slider from "react-slick";


const HomeBanner = () =>{
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
      };
    return(
        <div className="homebannersection">
             <Slider {...settings} >
             <div>
        <img className="w-full" src="https://www.aarong.com/_next/image?url=https%3A%2F%2Fmcprod.aarong.com%2Fmedia%2Fmageplaza%2Fbannerslider%2Fbanner%2Fimage%2Fd%2F-%2Fd-3-kids-main-banner-winter-03-12-2025-sm.png&w=1920&q=75" alt="" />
             </div>
             <div>
        <img className="w-full" src="https://www.aarong.com/_next/image?url=https%3A%2F%2Fmcprod.aarong.com%2Fmedia%2Fmageplaza%2Fbannerslider%2Fbanner%2Fimage%2Fd%2F-%2Fd-2-kids-main-banner-winter-03-12-2025-sm.png&w=1920&q=75" alt="" />
             </div>
             <div>
        <img className="w-full"  src="https://www.aarong.com/_next/image?url=https%3A%2F%2Fmcprod.aarong.com%2Fmedia%2Fmageplaza%2Fbannerslider%2Fbanner%2Fimage%2Fd%2F-%2Fd-4-kids-main-banner-winter-03-12-2025-sm.png&w=1920&q=75" alt="" />
             </div>
             <div>
        <img className="w-full"  src="https://www.aarong.com/_next/image?url=https%3A%2F%2Fmcprod.aarong.com%2Fmedia%2Fmageplaza%2Fbannerslider%2Fbanner%2Fimage%2Fd%2F-%2Fd-5-kids-main-banner-winter-03-12-2025-sm.png&w=1920&q=75" alt="" />
             </div>
                </Slider>

        </div>
       
    )

}

export default HomeBanner;