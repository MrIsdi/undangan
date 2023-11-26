import bg2 from "../assets/bg2.png"
import foto1 from "../assets/1.png"
import foto2 from "../assets/2.png"
import foto3 from "../assets/3.png"
import foto4 from "../assets/4.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function AboutVira({ cls }: string){
    return(
        <>
            <div id="2023" className={`${cls} bg-cover bg-no-repeat bg-[rgba(0,0,0,1)] w-full duration-500 ease-in-out transition-all md:h-full`} style={{
                backgroundImage: `url("${bg2}")`
            }}>
                <div className={`bg-gradient-to-b from-[#00000087] to-teal-800 `}>
                    <div className="flex flex-col items-center mb-20">
                        <h1 className="text-white md:text-4xl text-xl md:mt-8 mb-0 mt-16">Class of</h1>
                        <div className="md:h-[160px] h-[80px] flex justify-start items-start mb-12">
                            <p className="self-start font-['My_Soul'] md:text-9xl text-7xl text-white mb-0">20</p>
                            <p className="self-end font-['My_Soul'] md:text-9xl text-7xl text-white mb-0">23</p>
                        </div>
                        <h3 className="text-white md:text-5xl text-3xl">Delvira Syafna, S. Si</h3>
                        <h3 className="text-white md:text-4xl text-2xl italic font-thin">Bachelor Of Science</h3>
                        <div className="text-white mt-12">
                            <p className="text-center mb-4 text-4xl font-bold">Saturday</p>
                            <p className="text-center mb-4 text-7xl font-bold">02</p>
                            <p className="text-center mb-4 text-4xl font-bold">December</p>
                            <p className="text-center mb-4 text-4xl font-semibold">13:00-16:00 WIB</p>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={2}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <SwiperSlide className="justify-center flex">
                            <div className="rounded-[20px] bg-contain bg-no-repeat bg-gradient-to-b from-[#00000087] to-teal-800">
                                <img src={foto1} alt="foto1" className="md:w-[300px] md:h-[400px] h-[244px] rounded-[20px]" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="justify-center flex">
                            <div className="rounded-[20px] bg-contain bg-no-repeat bg-gradient-to-b from-[#00000087] to-teal-800">
                                <img src={foto2} alt="foto2" className="md:w-[300px] md:h-[400px] h-[244px] rounded-[20px]" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="justify-center flex">
                            <div className="rounded-[20px] bg-contain bg-no-repeat bg-gradient-to-b from-[#00000087] to-teal-800">
                                <img src={foto3} alt="foto2" className="md:w-[300px] md:h-[400px] h-[244px] rounded-[20px]" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="justify-center flex">
                            <div className="rounded-[20px] bg-contain bg-no-repeat bg-gradient-to-b from-[#00000087] to-teal-800">
                                <img src={foto4} alt="foto2" className="md:w-[300px] md:h-[400px] h-[244px] rounded-[20px]" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="w-full mt-20">
                        <h1 className="text-4xl text-white text-center">Map</h1>
                        <div className="flex justify-center p-4">
                            <MapContainer
                                center={[-0.911122,100.461109]}
                                zoom={20}
                                className="md:w-1/3 w-3/4 aspect-square rounded-[20px]"
                                >
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[-0.911122,100.461109]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                    <div className="py-8">
                        <p className="text-2xl text-white text-center font-bold">Andalas University</p>
                        <p className="text-2xl text-white text-center font-thin italic">Plaza MIPA</p>
                        <a href="#2023" className="relative w-[110px] block m-auto mt-8">
                            <img
                            alt="Calendar"
                            src="https://cdn.animaapp.com/projects/6560c42e4e4ddfb844c5cfc1/releases/6560c497b9e96f16e727a1ec/img/calendar-1.svg"
                            />
                            <img
                                className="absolute top-[17%] right-[40%]"
                                alt="Arrow"
                                src="https://cdn.animaapp.com/projects/6560c42e4e4ddfb844c5cfc1/releases/6560c497b9e96f16e727a1ec/img/arrow-1.svg"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}