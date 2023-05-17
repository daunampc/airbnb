import prisma from "@/libs/prismadb";
import { IListingParams } from "@/types/listing";
export default async function getListings(params: IListingParams) {
  // try {
  //   const {
  //     userId,
  //     endDate,
  //     startDate,
  //     category,
  //     roomCount,
  //     guestCount,
  //     bathroomCount,
  //     locationValue,
  //   } = params;
  //   let query: any = {};
  //   if (userId) {
  //     query.userId = userId;
  //   }
  //   if (category) {
  //     query.category = category;
  //   }
  //   if (roomCount) {
  //     query.roomCount = {
  //       gte: +roomCount,
  //     };
  //   }
  //   if (guestCount) {
  //     query.guestCount = {
  //       gte: +guestCount,
  //     };
  //   }
  //   if (bathroomCount) {
  //     query.bathroomCount = {
  //       gte: +bathroomCount,
  //     };
  //   }
  //   if (locationValue) {
  //     query.locationValue = locationValue;
  //   }
  //   if (startDate && endDate) {
  //     query.NOT = {
  //       reservations: {
  //         some: {
  //           OR: [
  //             {
  //               endDate: { gte: endDate },
  //               startDate: { lte: startDate },
  //             },
  //             {
  //               startDate: { lte: startDate },
  //               endDate: { gt: endDate },
  //             },
  //           ],
  //         },
  //       },
  //     };
  //   }
  //   const listings = await prisma.listing.findMany({
  //     where: query,
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //   });
  //   const safeListings = listings.map((listing) => ({
  //     ...listing,
  //     createdAt: listing.createdAt.toISOString(),
  //   }));
  //   return safeListings;
  // } catch (err: any) {
  //   throw new Error(err);
  // }
  //

  try {
    const {
      userId,
      roomCount,
      guestCount,
      bathroomCount,
      locationValue,
      startDate,
      endDate,
      category,
    } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (roomCount) {
      query.roomCount = {
        gte: +roomCount,
      };
    }

    if (guestCount) {
      query.guestCount = {
        gte: +guestCount,
      };
    }

    if (bathroomCount) {
      query.bathroomCount = {
        gte: +bathroomCount,
      };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
