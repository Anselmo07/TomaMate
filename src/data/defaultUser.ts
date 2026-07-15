import type { User } from "../types/user";

export const defaultUser: User = {

  profile: {

    id: crypto.randomUUID(),

    username: "matero",

    displayName: "Matero",

    avatar: "",

    bio: "",

    location: "",

    joinedAt: new Date().toISOString()

  },

  progress: {

    xp: 0,

    level: 1,

    coins: 0

  },

  inventory: {

    unlockedThermos: ["starter"],

    unlockedMates: ["wood"],

    unlockedStickers: [],

    equippedThermo: "starter",

    equippedMate: "wood",

    thermoStickers: []

  },

  history: []

};