import getCurrentUser from "@/actions/getCurrentUser";
import getListings from "@/actions/getListings";
import getReservations from "@/actions/getReservations";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import PropertiesClient from "./PropertiesClient";

const Properties = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser)
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please Login" />
      </ClientOnly>
    );
  const listings = await getListings({
    userId: currentUser.id,
  });
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you havent reserved any trips"
        />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};
export default Properties;
