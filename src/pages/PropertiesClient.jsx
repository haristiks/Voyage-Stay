import React, { useCallback, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import ListingCard from "../components/Cards/ListingCard";
import { FetchListings } from "../Redux/Reducers/AxiosCalls";
import axios from "../lib/Axios";
import toast from "react-hot-toast";

function PropertiesClient() {
  const ListingState = useSelector((state) => state.ListingState);
  const currentUser = useSelector((state) => state.currentUser);
  const userListings = ListingState.Listings.filter(
    (item) => item.userId == currentUser._id
  );
  const [deletingId, setDeletingId] = useState("");
  const dispatch = useDispatch();

  const onCancel = useCallback(
    (id) => {
      setDeletingId(id);

      axios
        .delete(`/api/users/listings/${id}`)
        .then(() => {
          toast.success("Property Deleted");
          dispatch(FetchListings());
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
        title="Properties"
        subtitle="List of Properties you have Created."
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {userListings.map((listing) => (
          <ListingCard
            key={listing._id}
            Card={listing}
            actionId={listing._id}
            onAction={onCancel}
            disabled={deletingId == listing._id}
            actionLabel="Delete Property"
          />
        ))}
      </div>
    </Container>
  );
}

export default PropertiesClient;
