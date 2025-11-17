import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../assets/banner1.png";
import bannerImg2 from "../assets/banner2.png";
import bannerImg3 from "../assets/banner3.png";
import workImg from "../assets/bookingIcon.png";
import servicesImg from "../assets/service.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import amazon from '../assets/amazon.png'
import casio from '../assets/casio.png'
import monstar from '../assets/moonstar.png'
import star from '../assets/star.png'
import starPeople from '../assets/start_people.png'
import randstad from '../assets/randstad.png'
import { Autoplay } from "swiper/modules";
import ReviewSection from "./ReviewSection";

const reviewPromise = fetch('/reviews.json')
.then(res => res.json())


const Banner = () => {
  return (
    <div className="my-10">
      {/* Carousel */}
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>

      {/* How it works section */}
      <div className="my-20 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-5">How it works</h3>
        <div className="flex justify-evenly gap-6 items-center">
          <div className="bg-white p-5 w-[400px] h-[220px] rounded-2xl">
            <img src={workImg} alt="" />
            <h5 className="text-xl font-semibold my-2">Booking Pick & Drop</h5>
            <p className="text-gray-700">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="bg-white p-5 w-[400px] h-[220px] rounded-2xl">
            <img src={workImg} alt="" />
            <h5 className="text-xl font-semibold my-2">Booking Pick & Drop</h5>
            <p className="text-gray-700">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="bg-white p-5 w-[400px] h-[220px] rounded-2xl">
            <img src={workImg} alt="" />
            <h5 className="text-xl font-semibold my-2">Booking Pick & Drop</h5>
            <p className="text-gray-700">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="bg-white p-5 w-[400px] h-[220px] rounded-2xl">
            <img src={workImg} alt="" />
            <h5 className="text-xl font-semibold my-2">Booking Pick & Drop</h5>
            <p className="text-gray-700">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
      {/* Our services */}
      <div className="bg-cyan-950 rounded-3xl">
        <h3 className="text-3xl pt-5 font-bold text-white text-center">
          Our Services
        </h3>
        <p className="text-white text-center my-4 mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
        <div className="max-w-6xl mx-auto space-y-6 grid grid-cols-3 p-5">
          <div className="bg-white w-[350px] h-[250px] p-5 rounded-2xl">
            <img className="mx-auto mb-2" src={servicesImg} alt="" />
            <h5 className="text-xl font-semibold text-center mb-2">
              Express & Standard Delivery
            </h5>
            <p className="text-center text-sm text-gray-700">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className="bg-white w-[350px] h-[250px] p-5 rounded-2xl">
            <img className="mx-auto mb-2" src={servicesImg} alt="" />
            <h5 className="text-xl font-semibold text-center mb-2">
              Express & Standard Delivery
            </h5>
            <p className="text-center text-sm text-gray-700">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className="bg-white w-[350px] h-[250px] p-5 rounded-2xl">
            <img className="mx-auto mb-2" src={servicesImg} alt="" />
            <h5 className="text-xl font-semibold text-center mb-2">
              Express & Standard Delivery
            </h5>
            <p className="text-center text-sm text-gray-700">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className="bg-white w-[350px] h-[250px] p-5 rounded-2xl">
            <img className="mx-auto mb-2" src={servicesImg} alt="" />
            <h5 className="text-xl font-semibold text-center mb-2">
              Express & Standard Delivery
            </h5>
            <p className="text-center text-sm text-gray-700">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className="bg-white w-[350px] h-[250px] p-5 rounded-2xl">
            <img className="mx-auto mb-2" src={servicesImg} alt="" />
            <h5 className="text-xl font-semibold text-center mb-2">
              Express & Standard Delivery
            </h5>
            <p className="text-center text-sm text-gray-700">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className="bg-white w-[350px] h-[250px] p-5 rounded-2xl">
            <img className="mx-auto mb-2" src={servicesImg} alt="" />
            <h5 className="text-xl font-semibold text-center mb-2">
              Express & Standard Delivery
            </h5>
            <p className="text-center text-sm text-gray-700">
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
      </div>
      {/* Brand */}
      <div className="my-20">
        <h4 className="text-2xl font-bold text-center mb-10">
          We've helped thousands of sales teams
        </h4>
        {/* Swiper */}
        <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,

        }}
        >
          <SwiperSlide><img src={amazon} alt="" /></SwiperSlide>
          <SwiperSlide><img src={casio} alt="" /></SwiperSlide>
          <SwiperSlide><img src={monstar} alt="" /></SwiperSlide>
          <SwiperSlide><img src={star} alt="" /></SwiperSlide>
          <SwiperSlide><img src={starPeople} alt="" /></SwiperSlide>
          <SwiperSlide><img src={randstad} alt="" /></SwiperSlide>
        </Swiper>
      </div>
      <ReviewSection reviewPromise={reviewPromise}></ReviewSection>
    </div>
  );
};

export default Banner;
