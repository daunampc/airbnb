"use client";

import useCountries from "@/hook/useCountries";
import { IListingHeadProps } from "@/types/listing";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

const ListingHead: React.FC<IListingHeadProps> = ({
  currentUser,
  id,
  title,
  imageSrc,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);
  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative ">
        <Image
          alt="Image"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
