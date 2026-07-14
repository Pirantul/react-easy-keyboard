import OnScreenKeyboard from "../on-screen-keyboard";
import { useKeyboardInput } from "./useKeyboardInput";
import packageJson from "../../package.json";
import "./app.css";

export default function App() {
  const {
    text,
    layout,
    layoutId,
    activeLang,
    languages,
    capsLock,
    keyStyle,
    onKeyPress,
    setLanguage,
    clearText,
  } = useKeyboardInput("en");

  const selectedLangId = layoutId === "numeric" ? activeLang?.id : layoutId;

  return (
    <div className="demo">
      <header className="demo__header">
        <p className="demo__eyebrow">React component · MIT · any language</p>
        <h1>React Easy Keyboard</h1>
        <p className="demo__lead">
          Lightweight on-screen virtual keyboard for React — kiosks, POS, touch forms.
          Switch languages below, or press the language key on the keyboard.
          Add German, Arabic, Japanese… by editing one file.
        </p>
        <div className="demo__meta">
          <span>
            Layout:{" "}
            <strong>
              {layoutId === "numeric"
                ? `123 ← ${activeLang?.code}`
                : `${activeLang?.code} · ${activeLang?.name}`}
            </strong>
          </span>
          <span>Caps: {capsLock ? "ON" : "OFF"}</span>
          <button type="button" className="demo__clear" onClick={clearText}>
            Clear
          </button>
        </div>
      </header>

      <div className="demo__langs" role="toolbar" aria-label="Keyboard language">
        {languages.map((lang) => (
          <button
            key={lang.id}
            type="button"
            className={
              selectedLangId === lang.id
                ? "demo__lang demo__lang--active"
                : "demo__lang"
            }
            onClick={() => setLanguage(lang.id)}
            title={lang.name}
            aria-pressed={selectedLangId === lang.id}
          >
            <span className="demo__lang-code">{lang.code}</span>
            <span className="demo__lang-name">{lang.name}</span>
          </button>
        ))}
      </div>
      <p className="demo__langs-hint">
        Built-in demo languages — add yours in{" "}
        <code>src/demo/layouts.js</code> (one string array per language).
      </p>

      <section className="demo__keyboard" aria-label="Keyboard demo">
        <div className="demo__field" aria-live="polite">
          {text || <span className="demo__placeholder">Tap keys to type…</span>}
        </div>
        <OnScreenKeyboard layout={layout} keyStyle={keyStyle} onKeyPress={onKeyPress} />
      </section>

      <footer className="demo__footer">
        <a
          href="https://github.com/Pirantul/react-easy-keyboard"
          target="_blank"
          rel="noreferrer"
        >
          View source on GitHub
        </a>
      </footer>

      <p className="demo__version" aria-label={`Version ${packageJson.version}`}>
        v{packageJson.version}
      </p>
    </div>
  );
}
