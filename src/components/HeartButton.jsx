import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function HeartButton({hasFavorited,listingId}) {
  return (
    <div className="relative hover:opacity-80 transition cursor-pointer">
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}

export default HeartButton;
