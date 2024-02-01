import React, { useCallback, useEffect, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Axios from "../lib/Axios";
import { useSelector } from "react-redux";
import ListingCard from "../components/Cards/ListingCard";
import toast from "react-hot-toast";

function Trips() {
  const [deletingId, setDeletingId] = useState("");
  const [reservations, setReservation] = useState(null);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    const getReservation = async () => {
      try {
        const respo = await Axios.get(`/api/users/reservations`);
        setReservation(respo?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getReservation();
  }, [deletingId]);

  const onCancel = useCallback(
    (id) => {
      setDeletingId(id);

      Axios.delete(`/api/users/reservations/${id}`)
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
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations?.map((reservation) => (
          <ListingCard
            key={reservation._id}
            Card={reservation.listingId}
            reservation={reservation}
            actionId={reservation._id}
            onAction={onCancel}
            disabled={deletingId === reservation._id}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}

export default Trips;
