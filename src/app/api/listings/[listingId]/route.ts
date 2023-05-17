import getCurrentUser from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { IListingDELETEParams, IListingParams } from "@/types/listing";
import { NextResponse } from "next/server";
export async function DELETE(
  request: Request,
  { params }: { params: IListingDELETEParams }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  const { listingId } = params;
  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }
  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });
  return NextResponse.json(listing);
}
