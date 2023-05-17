import { SafeReservation } from "./reservation";
import { SafeUser } from "./user";

export interface ITripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}
