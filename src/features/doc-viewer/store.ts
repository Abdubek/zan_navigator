import { create } from 'zustand'

interface DocState {
  docNumber: string
  editDocNumber: (content: string) => void
  asd: string
  editAsd: (content: string) => void
}

export const useDocStore = create<DocState>()((set) => ({
  docNumber: "",
  editDocNumber: (content: string) => set({ docNumber: content }),
  asd: "",
  editAsd: (content: string) => set({ asd: content }),
}))
