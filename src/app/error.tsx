"use client";

import EmptyState from "@/components/EmptyState";
import { IErrorStateProps } from "@/types/error";
import { useEffect } from "react";

const ErrorState: React.FC<IErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
};
export default ErrorState;
