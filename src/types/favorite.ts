import { SafeListing } from "./listing";
import { SafeUser } from "./user";

export interface IFavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}
