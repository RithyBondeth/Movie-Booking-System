"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider({ slideData }: { slideData: number[] }) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="${className}" style="
                    background-color: gray;
                    margin: 3px;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s ease;">
                  </span>`,
            }}
            spaceBetween={50}
            slidesPerView={1}
            className='mt-10'
        >
           {slideData.map((item, index) => (
            <SwiperSlide key={index} className='min-h-[450px] rounded-3xl bg-muted'>{item}</SwiperSlide>
           ))}
        </Swiper>
    )
}