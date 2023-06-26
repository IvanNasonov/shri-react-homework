"use client";
import { ReactNode, createContext, useCallback, useState } from "react";

export const TitleFilterValueContext = createContext<string>("");
export const TitleFilterSetterContext = createContext<(val: string) => void>(
  () => null
);

type GenreFilter = { name: string };
export const GenreFilterValueContext = createContext<GenreFilter | null>(null);
export const GenreFilterSetterContext = createContext<
  (val: GenreFilter) => void
>(() => null);

type CinemaFilter = { name: string; id?: string };
export const CinemaFilterValueContext = createContext<CinemaFilter | null>(
  null
);
export const CinemaFilterSetterContext = createContext<
  (val: CinemaFilter) => void
>(() => null);

type Props = {
  children: ReactNode;
};

export const FiltersProvider = ({ children }: Props) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState<GenreFilter | null>(null);
  const [cinemaFilter, setCinemaFilter] = useState<CinemaFilter | null>(null);

  const setTitleFilterHandler = useCallback((newValue: string) => {
    setTitleFilter(newValue);
  }, []);

  const setGenreFilterHandler = useCallback((newValue: GenreFilter) => {
    if (newValue?.name === "Не выбран") {
      setGenreFilter(null);
      return;
    }
    setGenreFilter(newValue);
  }, []);

  const setCinemaFilterHandler = useCallback((newValue: CinemaFilter) => {
    setGenreFilter(null);
    if (newValue?.name === "Не выбран") {
      setCinemaFilter(null);
      return;
    }
    setCinemaFilter(newValue);
  }, []);

  return (
    <TitleFilterSetterContext.Provider value={setTitleFilterHandler}>
      <TitleFilterValueContext.Provider value={titleFilter}>
        <GenreFilterValueContext.Provider value={genreFilter}>
          <GenreFilterSetterContext.Provider value={setGenreFilterHandler}>
            <CinemaFilterValueContext.Provider value={cinemaFilter}>
              <CinemaFilterSetterContext.Provider
                value={setCinemaFilterHandler}
              >
                {children}
              </CinemaFilterSetterContext.Provider>
            </CinemaFilterValueContext.Provider>
          </GenreFilterSetterContext.Provider>
        </GenreFilterValueContext.Provider>
      </TitleFilterValueContext.Provider>
    </TitleFilterSetterContext.Provider>
  );
};
