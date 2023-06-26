const englishToRussianGenreMap = {
  fantasy: "Фентези",
  comedy: "Комедия",
  action: "Экшен",
  horror: "Хоррор",
};

export const getTranslatedGenre = (enGenre: string) => {
  return (
    englishToRussianGenreMap[
      enGenre as keyof typeof englishToRussianGenreMap
    ] ?? enGenre
  );
};
