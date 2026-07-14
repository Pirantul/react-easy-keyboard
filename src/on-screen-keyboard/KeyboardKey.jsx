/**
 * @typedef {Object} KeyOverride
 * @property {string} label - Visible key label (must match a token in `layout`).
 * @property {string} [value] - Value passed to `onKeyPress` (defaults to `label`).
 * @property {import('react').CSSProperties} [style] - Inline styles merged onto the key.
 * @property {string} [className] - Extra CSS class for the key button.
 * @property {string} [ariaLabel] - Accessible name override.
 */

/**
 * @typedef {Object} KeyStyleConfig
 * @property {import('react').CSSProperties} [default] - Base styles for every key.
 * @property {KeyOverride[]} [keys] - Per-key overrides by label.
 */

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {import('react').CSSProperties} props.style
 * @param {string} [props.className]
 * @param {string} props.value
 * @param {string} [props.ariaLabel]
 * @param {(value: string) => void} props.onKeyPress
 */
export default function KeyboardKey({
  label,
  style,
  className = "",
  value,
  ariaLabel,
  onKeyPress,
}) {
  return (
    <button
      type="button"
      className={`on-screen-keyboard__key ${className}`.trim()}
      style={style}
      onClick={() => onKeyPress(value)}
      aria-label={ariaLabel ?? (value === " " ? "Space" : label)}
    >
      {label}
    </button>
  );
}
