import { createContext, ReactNode, useEffect, useState } from "react";

interface MoviesProviderProps {
    children: ReactNode;
}

interface MoviesContextData {
    selectedGenreId: number;
    changeGenre: (id: number) => void;
}

export const MoviesContext = createContext({} as MoviesContextData);

export function MoviesProvider({ children }: MoviesProviderProps) {

    const [selectedGenreId, setSelectedGenreId] = useState(1);

    function changeGenre(id: number) {
        setSelectedGenreId(id);
    }

    return (
        <MoviesContext.Provider value={{
            selectedGenreId,
            changeGenre
        }}>
            {children}
        </MoviesContext.Provider>
    )
}