
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import  slide1 from '../../../assets/home/slide1.jpg'
import  slide2 from '../../../assets/home/slide2.jpg'
import  slide3 from '../../../assets/home/slide3.jpg'
import  slide4 from '../../../assets/home/slide4.jpg'
import  slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <div className='w-11/12 mx-auto my-10'>
            <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'ORDER ONLINE'}></SectionTitle>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className='text-3xl text-white -mt-16 text-center  font-semibold '>Salad</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className='text-3xl text-white -mt-16 text-center  font-semibold '>Pizza</h3>
            </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-3xl text-white -mt-16 text-center  font-semibold '>Soup</h3>
            </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-3xl text-white -mt-16 text-center  font-semibold '>Pastry</h3>
            </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='text-3xl text-white -mt-16 text-center  font-semibold '>Salad</h3>
            </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Category;