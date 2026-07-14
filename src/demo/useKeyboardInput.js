import { useCallback, useMemo, useState } from "react";
import {
  ALPHA_BY_ID,
  ALPHA_LANGUAGES,
  DEMO_LAYOUTS,
  KEY_ACTIONS,
  SPACE_VALUES,
} from "./layouts";

const { CAPS, NUMERIC, ALPHA, LANG, BACKSPACE, BACKSPACE_LEGACY } = KEY_ACTIONS;

/**
 * Demo hook: text buffer + layout switching (languages + numeric).
 * Copy this pattern into kiosk / POS apps and extend ALPHA_LANGUAGES.
 */
export function useKeyboardInput(initialLayout = "en") {
  const [text, setText] = useState("");
  const [capsLock, setCapsLock] = useState(false);
  const [layoutId, setLayoutId] = useState(initialLayout);
  const [lastAlphaLayout, setLastAlphaLayout] = useState(initialLayout);

  const activeLang = ALPHA_BY_ID[layoutId] ?? ALPHA_BY_ID[lastAlphaLayout] ?? ALPHA_LANGUAGES[0];
  const isNumeric = layoutId === "numeric";

  // Replace LANG token with the current language code so the key shows EN / RU / DE…
  const layout = useMemo(() => {
    if (isNumeric) return DEMO_LAYOUTS.numeric;
    const rows = DEMO_LAYOUTS[layoutId] ?? activeLang.rows;
    return rows.map((row) => row.replace(/\bLANG\b/g, activeLang.code));
  }, [activeLang, isNumeric, layoutId]);

  const setLanguage = useCallback((id) => {
    if (!ALPHA_BY_ID[id]) return;
    setLayoutId(id);
    setLastAlphaLayout(id);
  }, []);

  const cycleLanguage = useCallback(() => {
    const currentId = isNumeric ? lastAlphaLayout : layoutId;
    const index = ALPHA_LANGUAGES.findIndex((lang) => lang.id === currentId);
    const next = ALPHA_LANGUAGES[(index + 1) % ALPHA_LANGUAGES.length];
    setLanguage(next.id);
  }, [isNumeric, lastAlphaLayout, layoutId, setLanguage]);

  const keyStyle = useMemo(() => {
    const spaceOverrides = ALPHA_LANGUAGES.map((lang) => ({
      label: lang.spaceLabel,
      value: " ",
      style: {
        minWidth: lang.spaceLabel.length > 5 ? "110px" : "140px",
        fontSize: lang.spaceLabel.length > 5 ? "20px" : "26px",
      },
    }));

    return {
      default: {
        fontSize: isNumeric ? "clamp(36px, 4vw, 52px)" : "clamp(24px, 2.8vw, 38px)",
        lineHeight: isNumeric ? "clamp(72px, 10vw, 110px)" : "clamp(56px, 8vw, 88px)",
        height: "100%",
      },
      keys: [
        ...spaceOverrides,
        {
          label: "CAPS",
          value: CAPS,
          style: {
            minWidth: "72px",
            maxWidth: "110px",
            background: capsLock ? "#8b4513" : undefined,
          },
        },
        {
          label: "⌫",
          value: BACKSPACE,
          style: {
            minWidth: "40px",
            maxWidth: isNumeric ? undefined : "90px",
          },
        },
        {
          label: isNumeric ? "abc" : "123",
          value: isNumeric ? ALPHA : NUMERIC,
          style: {
            minWidth: "50px",
            maxWidth: isNumeric ? undefined : "90px",
          },
        },
        {
          // Shows current language code; press to cycle EN → RU → DE → …
          label: activeLang?.code ?? "EN",
          value: LANG,
          style: {
            minWidth: "56px",
            maxWidth: "90px",
            fontSize: "22px",
            fontWeight: 700,
            background: "#0d47a1",
          },
          ariaLabel: `Language: ${activeLang?.name ?? "English"}. Press to switch.`,
        },
      ],
    };
  }, [activeLang, capsLock, isNumeric]);

  const onKeyPress = useCallback(
    (value) => {
      if (value === CAPS) {
        setCapsLock((prev) => !prev);
        return;
      }

      if (value === NUMERIC) {
        if (!isNumeric) setLastAlphaLayout(layoutId);
        setLayoutId("numeric");
        return;
      }

      if (value === ALPHA) {
        setLayoutId(lastAlphaLayout);
        return;
      }

      if (value === LANG) {
        cycleLanguage();
        return;
      }

      if (value === BACKSPACE || value === BACKSPACE_LEGACY) {
        setText((prev) => prev.slice(0, -1));
        return;
      }

      const char = SPACE_VALUES[value] ?? value;
      const next = capsLock ? char.toLocaleUpperCase() : char.toLocaleLowerCase();
      setText((prev) => prev + next);
    },
    [capsLock, cycleLanguage, isNumeric, lastAlphaLayout, layoutId]
  );

  const clearText = useCallback(() => setText(""), []);

  return {
    text,
    layout,
    layoutId,
    lastAlphaLayout,
    activeLang,
    languages: ALPHA_LANGUAGES,
    capsLock,
    keyStyle,
    onKeyPress,
    setLanguage,
    clearText,
    setText,
  };
}
