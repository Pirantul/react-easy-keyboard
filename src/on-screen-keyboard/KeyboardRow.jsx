import KeyboardKey from "./KeyboardKey";

/**
 * @param {Object} props
 * @param {string[]} props.row - Key labels for one keyboard row.
 * @param {import('./OnScreenKeyboard.jsx').KeyStyleConfig} props.keyStyle
 * @param {(value: string) => void} props.onKeyPress
 */
export default function KeyboardRow({ row, keyStyle, onKeyPress }) {
  const overrides = keyStyle?.keys ?? [];
  const defaultStyle = keyStyle?.default ?? {};

  return (
    <div className="on-screen-keyboard__row">
      {row.map((label, index) => {
        const override = overrides.find((item) => item.label === label);
        const value = override?.value ?? label;

        return (
          <KeyboardKey
            key={`${label}-${index}`}
            label={label}
            value={value}
            style={{ ...defaultStyle, ...(override?.style ?? {}) }}
            className={override?.className ?? ""}
            ariaLabel={override?.ariaLabel}
            onKeyPress={onKeyPress}
          />
        );
      })}
    </div>
  );
}
