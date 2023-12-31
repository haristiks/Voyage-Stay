import React from "react";
import HeartButton from "../HeartButton";
import Button from "../Button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function ListingCard({ onAction, actionLabel, Card }) {
  const date = new Date().getFullYear();

  return (
    <div className="col-span-1 cursor-pointer group  ">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Swiper
            slidesPerView={1}
            loop={true}
            mousewheel={true}
            cssMode={true}
            pagination={{
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="w-full h-full"
          >
            {Card.imageSrc.map((src, i) => (
              <SwiperSlide key={i}>
                <img src={src} className="object-cover w-full h-full" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute top-3 right-3 z-10">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {/* {location?.region},{location?.label} */}
          {Card.description}
        </div>
        <div className="font-light text-neutral-500">
          {/* {reservationDate || data.category} */}
          {date}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">₹{Card.price} </div>
          <div className="font-light">night</div>
          {/* {!reservation && <div className="font-light">night</div>} */}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={() => {}}
          />
        )}
      </div>
    </div>
  );
}

export default ListingCard;
