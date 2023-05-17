import { SafeUser } from "./user";

export interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}
