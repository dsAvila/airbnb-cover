import React, { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importar CSS
import './css/Categories.css';

// Importar os dados de categoria
import { categories } from '../../services/dataService';

export default function Categories({ changeCat }) {
    const [idClicked, setIdClicked] = useState(1);

    const handleClick = (e, id) => {
        // console.log('A categoria clicada atual é: ' + id);
        setIdClicked(id);
        changeCat(id);
    }

    return (
        <div style={{ marginTop: '80px', position: 'fixed', top: 0, zIndex: 999 }} className='bg-white pt-2 container-fluid d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center container-airbnb row'>
                <div className='col-sm-11'>
                    <Swiper
                        breakpoints={{
                            100: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 1
                            },
                            // Tela maior que >= 576 (sm)
                            576: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 4
                            },
                            // Tela maior que >= 768 (md)
                            768: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                                spaceBetween: 7
                            },
                            // Tela maior que >= 992 (lg)
                            992: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetween: 7
                            },
                            // Tela maior que >= 1200 (xl)
                            1200: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetween: 7
                            },
                            // Tela maior que >= 1400
                            1400: {
                                slidesPerView: 10,
                                slidesPerGroup: 10,
                                spaceBetween: 7
                            },
                            // Tela maior que >= 1600 (xxl)
                            1600: {
                                slidesPerView: 14,
                                slidesPerGroup: 13,
                                spaceBetween: 7
                            }
                        }}
                        pagination={false}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            categories.map((data, index) => (
                                <SwiperSlide
                                    key={data.id}
                                    virtualIndex={index}
                                    className={data.id === idClicked ? 'active' : ''}
                                    onClick={(e) => handleClick(e, data.id)}
                                >
                                    <img className='mb-2' src={data.image} />
                                    <span>{data.title}</span>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='col-sm-1'>
                    <button className='d-none d-md-flex d-lg-none justify-content-center w-100 btn btn-filter float-end'
                        data-bs-toggle="modal" data-bs-target="#filterModal">
                        <i className='mdi mdi-filter-variant me-2'></i>
                    </button>
                    <button className='d-none d-lg-flex btn btn-filter d-flex float-end' data-bs-toggle="modal" data-bs-target="#filterModal">
                        <i className='mdi mdi-filter-variant me-2'></i>
                        Filtros
                    </button>
                </div>
            </div>
        </div>
    )
}