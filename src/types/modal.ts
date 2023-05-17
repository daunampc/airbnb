import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface IModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}
export interface IHeading {
  title: string;
  subtitle?: string;
  center?: boolean;
}
export interface IUseLoginModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export interface IUseRentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
