import React, { useCallback, useEffect, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import toast from "react-hot-toast";
import axios from "../lib/Axios";
import ListingCard from "../components/Cards/ListingCard";
import { useSelector } from "react-redux";

function Reservations() {
  const [deletingId, setDeletingId] = useState("");
  const [reservations, setReservation] = useState(null);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    const getReservation = async () => {
      try {
        const respo = await axios.get(`/api/data/reservations`);
        setReservation(respo?.data?.data);
        console.log(respo.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getReservation();
  }, [deletingId]);

  const bookings = reservations?.filter((item) => {
    item.listingId.userId == currentUser?._id;
  });

  const onCancel = useCallback(
    (id) => {
      setDeletingId(id);

      axios
        .delete(`/api/users/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [currentUser]
  );

  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations?.map((reservation) => (
          <ListingCard
            key={reservation._id}
            Card={reservation.listingId}
            reservation={reservation}
            actionId={reservation._id}
            onAction={onCancel}
            disabled={deletingId == reservation._id}
            actionLabel="Cancel guest reservation"
          />
        ))}
      </div>
    </Container>
  );
}

export default Reservations;
