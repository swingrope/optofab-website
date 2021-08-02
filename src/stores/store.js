import { createContext, useContext } from "react";
import { FormStore } from "./FormStore";

export const store = {
    formStore: new FormStore()
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}