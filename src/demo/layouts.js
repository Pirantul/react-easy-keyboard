/**
 * Demo layouts for multiple languages.
 * Add a new language: copy an entry into ALPHA_LANGUAGES and fill rows.
 * Each row is a space-separated list of key labels.
 */

/** Action values used by the demo (handled in useKeyboardInput). */
export const KEY_ACTIONS = {
  CAPS: "CAPS",
  NUMERIC: "123",
  ALPHA: "abc",
  LANG: "LANG",
  BACKSPACE: "⌫",
  BACKSPACE_LEGACY: "<",
};

/**
 * Alphabetic layouts. `spaceLabel` is the visible space-key text
 * (still emits a regular space character).
 */
export const ALPHA_LANGUAGES = [
  {
    id: "en",
    code: "EN",
    name: "English",
    spaceLabel: "SPACE",
    rows: [
      "A B C D E F",
      "G H I J K L M",
      "N O P Q R S",
      "T U V W X Y Z",
      "CAPS 123 SPACE LANG ⌫",
    ],
  },
  {
    id: "ru",
    code: "RU",
    name: "Русский",
    spaceLabel: "ПРОБЕЛ",
    rows: [
      "А Б В Г Д Е Ё Ж",
      "З И Й К Л М Н О",
      "П Р С Т У Ф Х Ц",
      "Ч Ш Щ Ъ Ы Ь Э Ю",
      "CAPS 123 ПРОБЕЛ LANG ⌫",
    ],
  },
  {
    id: "de",
    code: "DE",
    name: "Deutsch",
    spaceLabel: "LEER",
    rows: [
      "A B C D E F G",
      "H I J K L M N",
      "O P Q R S T U",
      "V W X Y Z Ä Ö Ü ß",
      "CAPS 123 LEER LANG ⌫",
    ],
  },
  {
    id: "fr",
    code: "FR",
    name: "Français",
    spaceLabel: "ESPACE",
    rows: [
      "A B C D E F G",
      "H I J K L M N",
      "O P Q R S T U",
      "V W X Y Z À Ç É È",
      "CAPS 123 ESPACE LANG ⌫",
    ],
  },
  {
    id: "es",
    code: "ES",
    name: "Español",
    spaceLabel: "ESPACIO",
    rows: [
      "A B C D E F G",
      "H I J K L M N",
      "O P Q R S T U",
      "V W X Y Z Ñ Á É Í Ó Ú",
      "CAPS 123 ESPACIO LANG ⌫",
    ],
  },
  {
    id: "tr",
    code: "TR",
    name: "Türkçe",
    spaceLabel: "BOŞLUK",
    rows: [
      "A B C Ç D E F",
      "G Ğ H I İ J K",
      "L M N O Ö P R",
      "S Ş T U Ü V Y Z",
      "CAPS 123 BOŞLUK LANG ⌫",
    ],
  },
  {
    id: "uz",
    code: "UZ",
    name: "O'zbek",
    spaceLabel: "BO'SH",
    rows: [
      "A B C D E F G G'",
      "H I J K L M N O O'",
      "P Q R S Sh T U V X",
      "Y Z Ch Ng",
      "CAPS 123 BO'SH LANG ⌫",
    ],
  },
  {
    id: "kk",
    code: "KK",
    name: "Қазақша",
    spaceLabel: "БОС",
    rows: [
      "А Ә Б В Г Ғ Д Е Ё",
      "Ж З И Й К Қ Л М Н",
      "Ң О Ө П Р С Т У Ұ",
      "Ү Ф Х Һ Ц Ч Ш Щ Ы І",
      "CAPS 123 БОС LANG ⌫",
    ],
  },
];

/** Numeric pad shared by all alphabetic layouts. */
export const NUMERIC_LAYOUT = ["1 2 3", "4 5 6", "7 8 9", "abc 0 ⌫"];

export const ALPHA_BY_ID = Object.fromEntries(
  ALPHA_LANGUAGES.map((lang) => [lang.id, lang])
);

/** Quick lookup: layout id → rows (incl. numeric). */
export const DEMO_LAYOUTS = {
  numeric: NUMERIC_LAYOUT,
  ...Object.fromEntries(ALPHA_LANGUAGES.map((lang) => [lang.id, lang.rows])),
};

/** Space key labels → character inserted into the input. */
export const SPACE_VALUES = Object.fromEntries(
  ALPHA_LANGUAGES.map((lang) => [lang.spaceLabel, " "])
);
