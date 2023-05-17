import { Reservation } from "@prisma/client";
import { SafeListing } from "./listing";
import { SafeUser } from "./user";

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export interface IReservationParams {
  reservationId?: string;
}
export interface IReservationsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}
