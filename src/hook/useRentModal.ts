import { IUseRentModalStore } from "@/types/modal";
import { create } from "zustand";

const useRentModal = create<IUseRentModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRentModal;
