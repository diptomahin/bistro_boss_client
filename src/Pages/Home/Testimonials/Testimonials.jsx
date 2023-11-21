import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='w-10/12 mx-auto'>
            <SectionTitle heading={'TESTIMONIALS'} subHeading={'What Our Clients Say'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper items-center text-center w-4/5">
                {
                    reviews.map(review => <SwiperSlide className='p-10' key={review._id}>
                        <Rating
                            className='mx-auto py-4'
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p>{review.details}</p>
                        <h3 className="text-2xl">{review.name}</h3>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;