import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
export interface INavbarProps {
  currentUser?: SafeUser | null;
}
export interface IAvatar {
  src?: string | null | undefined;
}
