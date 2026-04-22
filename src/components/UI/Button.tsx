import type { ButtonProps } from "../../types/types.ts";
import { buttonSize, buttonVariants } from "../../styles/global.ts";

export default function Button({
  variant = "primary",
  size = "md",
  label,
  icon,
  children,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 transition duration-150 ease-in-out cursor-pointer";

  return (
    <button
      className={`${baseClasses} ${buttonVariants[variant]} ${buttonSize[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
      {icon}
      {children}
    </button>
  );
}
