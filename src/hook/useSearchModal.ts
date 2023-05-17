import { IUseSearchModalStore } from "@/types/search";
import { create } from "zustand";

const useSearchModal = create<IUseSearchModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
export default useSearchModal;
