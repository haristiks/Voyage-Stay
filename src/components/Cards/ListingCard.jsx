import React, { useCallback, useMemo } from "react";
import HeartButton from "../HeartButton";
import Button from "../Button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

function ListingCard({
  onAction,
  actionLabel,
  reservation,
  actionId = "",
  disabled,
  Card,
}) {
  const date = new Date().getFullYear();
  const navigate = useNavigate();

  const handleCancel = useCallback(
    (e) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return Card.price;
  }, [reservation, Card.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      className="col-span-1 cursor-pointer group  "
      onClick={() => navigate(`/listings/${Card._id}`)}
    >
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
            <HeartButton listingId={Card._id} />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {/* {location?.region},{location?.label} */}
          {Card.description}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || Card.category}
          {date}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">₹{Card.price} </div>
          {!reservation && <div className="font-light">night</div>}
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>
  );
}

export default ListingCard;
