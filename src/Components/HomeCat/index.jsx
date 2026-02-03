
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useState } from 'react';
const HomeCat =()=>{
    const [itemBg, setItemBg]=useState([
       '#fffceb',
  '#f1f7f3',
  '#feefea',
  '#f4fbf8',
  '#fff3e6',
  '#ecffec',
  '#fff1f3',
  '#fdf1e7',
  '#eef6f4',
  '#fff8f0',
  '#f5f3f0',
  '#ecffec',
  '#fff3e6',
  '#f1f7f3',
  '#feefea',
  '#fef6e9',
  '#fffceb'
    ])
    return <section className="homeCat">
      <div className=''>
      <h3 className=" hd">FEATURE CATAGORIES</h3>
      <Swiper slidesPerView={10}
       spaceBetween={20}
        navigation={false} 
        slidesPerGroup={1}
        centeredSlides={false}
        pagination={ true }
        modules={[Pagination]} className="mySwiper ">
             {
                itemBg?.map((item,index)=>{
                    return <SwiperSlide>
       <div className="item text-center cursor-pointer" style={{background:item}}>
        <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt="" />
        <h4>Cloths</h4>
        </div>
       </SwiperSlide>
                })
             }            
       
     
        </Swiper>
      </div>
       
    </section>
}

export default HomeCat;