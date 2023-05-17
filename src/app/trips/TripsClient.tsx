"use client";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ListingCard from "@/components/listings/ListingCard";
import { ITripsClientProps } from "@/types/trip";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

const TripsClient: React.FC<ITripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deleteId, setDeleteId] = useState<string>();
  const onCanel = useCallback(
    (id: string) => {
      setDeleteId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation cancelled");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
          router.push("/trips");
        })
        .finally(() => {
          setDeleteId("");
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reservations.map((item) => {
          return (
            <ListingCard
              key={item.id}
              data={item.listing}
              reservation={item}
              actionId={item.id}
              onAction={onCanel}
              disabled={deleteId === item.id}
              actionLabel="Cancel reservation"
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </Container>
  );
};
export default TripsClient;
