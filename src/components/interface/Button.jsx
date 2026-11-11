/**
 * Button component supporting neutral design system
 *
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'danger' | 'ghost'} [props.variant='primary']
 * @param {React.ReactNode} [props.icon] - Phosphor icon or SVG icon element
 * @param {'left' | 'right'} [props.iconPosition='left'] - Icon placement when both icon and label exist
 * @param {React.ReactNode} [props.children] - Label / content
 * @param {string} [props.className='']
 */
export const Button = ({
  variant = "primary",
  icon = null,
  iconPosition = "left",
  children,
  className = "",
  disabled = false,
  ...props
}) => {
  // kiểu nút: Primary, Secondary, Danger, Ghost (không có background trong nút)
  const variantStyles = {
    primary:
      "bg-neutral-800 text-neutral-50 hover:bg-neutral-600 disabled:hover:bg-neutral-800",
    secondary:
      "bg-neutral-100 text-neutral-950 hover:bg-neutral-200 disabled:hover:bg-neutral-100",
    danger: "bg-red-50 text-red-500 hover:bg-red-100 disabled:hover:bg-red-50",
    ghost:
      "bg-transparent text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 disabled:hover:bg-transparent",
  };

  // Check if it's icon-only (icon provided, no children/label)
  const isIconOnly = Boolean(icon && !children);

  // aspect-square on icon-only ensures a 1:1 perfect square ratio (h-9 w-9).
  const shapeStyle = isIconOnly ? "h-9 w-9 p-0 aspect-square" : "h-9 px-4 py-2";

  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm transition-colors hover:duration-0 duration-200 cursor-pointer disabled:opacity-50 select-none shrink-0 ${variantStyles[variant] || variantStyles.primary} ${shapeStyle} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center justify-center shrink-0">
          {icon}
        </span>
      )}
      {children && <span>{children}</span>}
      {icon && iconPosition === "right" && (
        <span className="flex items-center justify-center shrink-0">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
