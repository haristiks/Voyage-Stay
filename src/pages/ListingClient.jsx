import React, { useCallback, useEffect, useMemo, useState } from "react";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import ListingHead from "../components/listings/ListingHead";
import axios from "../lib/Axios";
import ListingInfo from "../components/listings/ListingInfo";
import { categories } from "../components/Header/Categories";
import offer from "../assets/Offer/myOffer.jpeg";
import ListingReservation from "../components/listings/ListingReservation";
import { useDispatch, useSelector } from "react-redux";
import { onOpen } from "../Redux/Reducers/useLoginModal";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

function ListingClient() {
  const { listingId } = useParams();
  const [list, setList] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(list?.price);
  const [dateRange, setDateRange] = useState(initialDateRange);
  const [reservations, setReservation] = useState(null);

  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/data/listings/${listingId}`);
        setList(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const getReservation = async () => {
      try {
        const respo = await axios.get(`/api/data/reservations/${listingId}`);
        setReservation(respo?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    getReservation();
  }, [listingId]);

  const category = useMemo(() => {
    return categories.find((item) => item.label == list?.category);
  }, [list]);

  const disabledDates = useMemo(() => {
    let dates = [];

    reservations?.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation?.startDate),
        end: new Date(reservation?.endDate),
      });

      dates = [...dates, ...range]; 
    });

    return dates;
  }, [reservations]);

  const onCreateReservation = useCallback(async () => {
    if (!currentUser) {
      return dispatch(onOpen());
    }

    setIsloading(true);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

    try {
      const resp = await axios.post(
        `/api/users/reservations`,
        {
          totalPrice,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          listingId: list?._id,
        },
        {
          withCredentials: true,
        }
      );

      const result = stripe.redirectToCheckout({
        sessionId: resp.data.id,
      });

      setDateRange(initialDateRange);

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsloading(false);
    }
  }, [totalPrice, dateRange, list?.id, currentUser]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dayCount && list?.price) {
        if (dateRange.startDate == dateRange.endDate) {
          setTotalPrice(dayCount * list?.price);
        }
        setTotalPrice(dayCount * list?.price + list?.price);
        
      } else {
        setTotalPrice(list?.price);
      }
    }
  }, [dateRange, list?.price]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={list?.title}
            imageSrc={list?.imageSrc[0]}
            locationValue={list?.locationValue}
            id={list?.id}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={list?.user}
              category={category}
              description={list?.description}
              roomCount={list?.roomCount}
              guestCount={list?.guestCount}
              bathroomCount={list?.bathroomCount}
              locationValue={list?.locationValue}
            />
            <div className="order-first mb-10 md:order-last md:col-span-3">
              <div className="w-full h-[30vh] overflow-hidden rounded-xl relative mb-2">
                <img alt="Image" src={offer} className="object-cover w-full" />
                <div className="absolute bottom-2 right-2">
                  <h1 className="bg-inherit p-2 rounded font-bold drop-shadow-md border-dashed border-2 border-orange-600">
                    use promo : <span className="text-white"> FLAT50 </span>
                  </h1>
                </div>
              </div>
              <ListingReservation
                price={list?.price}
                totalPrice={totalPrice}
                onChangeDate={(value) => {
                  setDateRange(value);
                }}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ListingClient;
