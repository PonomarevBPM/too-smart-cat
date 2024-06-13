import { Dispatch, SetStateAction, createContext } from "react";

export const HearContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, () => {}]);