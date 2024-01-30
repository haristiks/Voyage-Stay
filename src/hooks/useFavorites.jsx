import axios from "../lib/Axios";
import { useCallback, useMemo } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { onOpen } from "../Redux/Reducers/useLoginModal";
import { FetchFavorites } from "../Redux/Reducers/AxiosCalls";

const useFavorite = ({ listingId }) => {
  const currentUser = useSelector((state) => state.currentUser);
  const fav = useSelector((state) => state.UserFavorites);
  const dispatch = useDispatch();

  const hasFavorited = useMemo(() => {
    const list = fav.Favorites || [];
    const favlist = list.filter((item) => item.listingId._id == listingId);
    return favlist.length > 0;
  }, [fav, listingId]);

  const toggleFavorite = useCallback(
    async (e) => {
      e.stopPropagation();
      console.log(fav.Favorites);

      if (!currentUser) {
        return dispatch(onOpen());
      }

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.put(`/api/users/favorites`, { listingId });
        } else {
          request = () => axios.post(`/api/users/favorites`, { listingId });
        }
        const response = await request();
        if (response.status == 201) {
          dispatch(FetchFavorites());
          toast.success(response.data.message);
        }
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, listingId, FetchFavorites]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
