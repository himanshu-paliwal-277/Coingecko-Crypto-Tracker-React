import { create } from "zustand";

const store = create((set) => ({
    currency: "inr",
    theme: "forest",  

    setCurrency: (newCurrency) => set((state) => ({
        ...state,
        currency: newCurrency,
    })),

    setTheme: (newTheme) => set((state) => ({
        ...state,
        theme: newTheme,
    })),
}));

export default store;
