import { create } from "zustand";

export const useFilterStore = create((set) => ({
  //filter store
  categories: [],
  sizes: [],
  themes: [],
  priceRange: "",

  setCategories: (newCategories) =>
    set((state) => ({
      categories: newCategories,
    })),

  setPriceRange: (newPriceRange) =>
    set((state) => ({
      priceRange: newPriceRange,
    })),

  setSizes: (newSizes) =>
    set((state) => ({
      sizes: newSizes,
    })),

  setThemes: (newThemes) =>
    set((state) => ({
      themes: newThemes,
    })),
}));

export const useUserStore = create((set) => ({
  // user store
  userId: "",
  userEmail: "",
  userFirstName: "",
  userLastName: "",
  userAvatarUrl: "",

  setUserId: (newUserId) =>
    set((state) => ({
      userId: newUserId,
    })),

  setUserEmail: (newUserEmail) =>
    set((state) => ({
      userEmail: newUserEmail,
    })),

  setUserFirstName: (newUserFirstName) =>
    set((state) => ({
      userFirstName: newUserFirstName,
    })),

  setUserLastName: (newUserLastName) =>
    set((state) => ({
      userLastName: newUserLastName,
    })),

  setUserAvatarUrl: (newUserAvatarUrl) =>
    set((state) => ({
      userAvatarUrl: newUserAvatarUrl,
    })),

  setUser: ({
    userId,
    userEmail,
    userFirstName,
    userLastName,
    userAvatarUrl,
  }) =>
    set({
      userId: userId,
      userEmail: userEmail,
      userFirstName: userFirstName,
      userLastName: userLastName,
      userAvatarUrl: userAvatarUrl,
    }),

  resetUserData: () =>
    set({
      userId: "",
      userEmail: "",
      userFirstName: "",
      userLastName: "",
      userAvatarUrl: "",
    }),
}));
