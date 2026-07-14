import KeyboardRow from "./KeyboardRow";
import "./on-screen-keyboard.css";

/**
 * Lightweight on-screen (virtual) keyboard for React.
 *
 * Define layouts as string arrays, style keys individually, and handle
 * special actions (caps, backspace, layout switch) in your `onKeyPress` handler.
 *
 * @param {Object} props
 * @param {string[]} props.layout - Rows of space-separated key labels.
 * @param {KeyStyleConfig} [props.keyStyle] - Default and per-key styling.
 * @param {(value: string) => void} props.onKeyPress - Called with key value on tap/click.
 * @param {string} [props.className] - Extra class on the keyboard container.
 * @param {string} [props.ariaLabel="On-screen keyboard"] - Accessible name.
 */
export default function OnScreenKeyboard({
  layout,
  keyStyle = {},
  onKeyPress,
  className = "",
  ariaLabel = "On-screen keyboard",
}) {
  const rows = layout.map((row) => row.split(" ").filter(Boolean));

  return (
    <div
      className={`on-screen-keyboard ${className}`.trim()}
      role="group"
      aria-label={ariaLabel}
    >
      {rows.map((row, index) => (
        <KeyboardRow
          key={`${index}-${row.join("-")}`}
          row={row}
          keyStyle={keyStyle}
          onKeyPress={onKeyPress}
        />
      ))}
    </div>
  );
}

/**
 * @typedef {import('./KeyboardRow.jsx').KeyStyleConfig} KeyStyleConfig
 */
