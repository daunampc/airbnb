"use client";
import useFavorite from "@/hook/useFavorite";
import { IHeartButtonProps } from "@/types/listing";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const HeartButton: React.FC<IHeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });
  console.log("hasFavorited ", hasFavorited);
  return (
    <div
      className="relative hover:opacity-80 transition cursor-pointer"
      onClick={toggleFavorite}
    >
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
};
export default HeartButton;
