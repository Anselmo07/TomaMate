import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import type { MateEntry } from "../types/mate";
import type { Profile } from "../types/profile";

import { mockEntries } from "../data/mockEntries";
import { mockProfile } from "../data/mockProfile";

import { LocalStorageService } from "../services/localStorage";

interface MateContextType {

    profile: Profile;

    entries: MateEntry[];

    setEntries: React.Dispatch<
        React.SetStateAction<MateEntry[]>
    >;

}

const MateContext =
    createContext<MateContextType | null>(null);

export function MateProvider({

    children

}: {

    children: React.ReactNode

}) {

    const [profile] = useState<Profile>(() => {

        return (
            LocalStorageService.getProfile() ??
            mockProfile
        );

    });

    const [entries, setEntries] = useState<MateEntry[]>(() => {

        const saved =
            LocalStorageService.getEntries();

        return saved.length
            ? saved
            : mockEntries;

    });

    useEffect(() => {

        LocalStorageService.saveEntries(entries);

    }, [entries]);

    return (

        <MateContext.Provider

            value={{
                profile,
                entries,
                setEntries
            }}

        >

            {children}

        </MateContext.Provider>

    );

}

export function useMate() {

    const context = useContext(MateContext);

    if (!context)
        throw new Error("MateProvider faltante");

    return context;

}