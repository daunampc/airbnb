import { IUseLoginModalStore } from "@/types/modal";
import { create } from "zustand";

const useLoginModal = create<IUseLoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
export default useLoginModal;
