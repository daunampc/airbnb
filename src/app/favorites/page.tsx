import getCurrentUser from "@/actions/getCurrentUser";
import getFavoriteListings from "@/actions/getFavoriteListings";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();
  if (listings.length === 0)
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </ClientOnly>
    );
};
export default ListingPage;