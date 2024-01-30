import React from "react";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/Cards/ListingCard";

function Favorites() {
  const favorites = useSelector((state) => state.UserFavorites);
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of places you have favorited."
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {favorites?.Favorites?.map((listing) => (
          <ListingCard key={listing._id} Card={listing.listingId} />
        ))}
      </div>
    </Container>
  );
}

export default Favorites;
