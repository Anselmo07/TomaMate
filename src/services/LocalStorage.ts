import type { MateEntry } from "../types/mate";
import type { Profile } from "../types/profile";

const PROFILE_KEY = "matehub_profile";
const ENTRIES_KEY = "matehub_entries";

export const LocalStorageService = {

    saveProfile(profile: Profile) {

        localStorage.setItem(
            PROFILE_KEY,
            JSON.stringify(profile)
        );

    },

    getProfile(): Profile | null {

        const data = localStorage.getItem(PROFILE_KEY);

        return data ? JSON.parse(data) : null;

    },

    saveEntries(entries: MateEntry[]) {

        localStorage.setItem(
            ENTRIES_KEY,
            JSON.stringify(entries)
        );

    },

    getEntries(): MateEntry[] {

        const data = localStorage.getItem(ENTRIES_KEY);

        return data ? JSON.parse(data) : [];

    }

};