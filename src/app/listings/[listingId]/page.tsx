import getListingById from "@/actions/getListingById";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import { IListingPageParams } from "@/types/listing";
import ListingClient from "./ListingClient";
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";

const ListingPage = async ({ params }: { params: IListingPageParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};
export default ListingPage;
