"use client";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ListingCard from "@/components/listings/ListingCard";
import { IPropertiesClientProps } from "@/types/properties";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

const PropertiesClient: React.FC<IPropertiesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  const [deleteId, setDeleteId] = useState<string>();
  const onCanel = useCallback(
    (id: string) => {
      setDeleteId(id);
      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Listing deleted");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeleteId("");
        });
    },
    [router]
  );
  return (
    <Container>
      <Heading title="Properties" subtitle="List of your properties" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((item) => {
          return (
            <ListingCard
              key={item.id}
              data={item}
              actionId={item.id}
              onAction={onCanel}
              disabled={deleteId === item.id}
              actionLabel="Delete Property"
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </Container>
  );
};
export default PropertiesClient;
