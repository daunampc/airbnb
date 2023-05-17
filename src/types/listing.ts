import { Listing, Reservation, User } from "@prisma/client";
import { SafeUser } from "./user";
import { SafeReservation } from "./reservation";
import { IconType } from "react-icons";
import { Range } from "react-date-range";
export interface IListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}
export interface IHeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}
export interface IParams {
  listingId?: string;
}

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};
export interface IListingPageParams {
  listingId?: string;
}
export interface IListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & { user: SafeUser };
  currentUser?: SafeUser | null;
}
export interface IListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}
export interface IListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description?: string | null;
      }
    | undefined;
  locationValue: string;
}
export interface IListingCatgoryProps {
  icon: IconType;
  label: string;
  description?: string | null;
}
export interface IListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

export interface IListingParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}
export interface IListingDELETEParams {
  listingId?: string;
}
