import React from 'react'
// Importar CSS do Card
import './css/Card.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importar dados de services (simulação)
// import { accommodations } from '../../services/dataService';

export default function Card({ data }) {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomMonth() {
        const month = [
            "jan.", "fev.", "mar.", "abr.", "mai.", "jun.",
            "jul.", "ago.", "set.", "out.", "nov.", "dez."
        ]

        return month[getRandomInt(0, 11)];
    }

    function animation(e) {
        e.target.classList.toggle('animate');
    }

    if (data.length == 0) {
        return (
            <div style={{ paddingTop: '180px' }} className="d-flex justify-content-center align-items-center">
                <div className="container-airbnb row">
                    <div className="col mt-5">
                        <div className="card text-center">
                            <div className="card-body">
                                Nenhuma acomodação encontrada para esta categoria
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div style={{ paddingTop: '180px', paddingBottom: '100px' }} className='container-fluid'>
                <div className="container-airbnb row">
                    {
                        data.map((accommodation, index) => (
                            <div key={accommodation.id} className="position-relative mt-4 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                                <div onClick={animation} className="HeartAnimation position-absolute top-0 end-0"></div>
                                <Swiper
                                    className='img-content'
                                    pagination={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                >
                                    {
                                        accommodation.images.map((image, index) => (
                                            <SwiperSlide
                                                className='swiperImg'
                                                key={index}
                                            >
                                                <img src={image} className='img-fluid cardImg' />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                                <p className='d-flex justify-content-between mt-3 mb-0'>
                                    <span style={{
                                        display: 'block', maxWidth: '200px'
                                    }}
                                        className='fw text-truncate'>{accommodation.city}, {accommodation.country}</span>
                                    <span> <i className='mdi mdi-star' />{accommodation.rating}</span>
                                </p>
                                <p className='text-muted my-0'>{getRandomInt(10, 800)} KM de distância</p>
                                <p className='text-muted'>{getRandomInt(1, 18)} – {getRandomInt(19, 29)} de {getRandomMonth()}</p>
                                <p className='fw'>R${accommodation.price.toLocaleString('pt-br')}<span className='fw-normal'> noite</span></p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
