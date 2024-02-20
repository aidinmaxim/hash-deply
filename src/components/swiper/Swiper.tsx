import React, {FC, useRef, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './MySwiper.module.css'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

interface MySwiperProps {
    images: string[]
}

const MySwiper: FC<MySwiperProps> = ({ images}) => {
    return (
        <div className={styles.swiperContainer}>
            <Swiper
                pagination={{
                    type: 'bullets',
                }}
                navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} className={styles.swiperImage} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MySwiper;
