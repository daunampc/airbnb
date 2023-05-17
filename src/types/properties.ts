import { SafeListing } from "./listing";
import { SafeUser } from "./user";

export interface IPropertiesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}
