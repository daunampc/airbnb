"use client";

import { IAvatar } from "@/types/user";
import Image from "next/image";

const Avatar: React.FC<IAvatar> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      width={30}
      height={30}
      alt="Avatar"
      src={src || `/images/placeholder.jpg`}
    />
  );
};
export default Avatar;
