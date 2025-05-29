// src/atoms/user.atom.ts
import { atom } from 'jotai'

export const firstNameAtom = atom<string>("")
export const lastNameAtom = atom<string>("")
export const ageAtom = atom<number>(0)
export const hobbiesAtom = atom<string[]>([])
