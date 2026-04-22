import type { InputProps } from "../../types/types";

export default function Input({ label, id, className, ...props }: InputProps) {
  const labelVisible = id === "search" ? "sr-only" : "font-semibold";
  const wrapperWidth = id === "search" ? "w-full" : "w-full";

  return (
    <p className={`${wrapperWidth} flex flex-col gap-1`}>
      <label className={labelVisible} htmlFor={id}>
        {label}
      </label>
      <input
        className={`w-full border border-black p-2 rounded-sm ${className}`}
        id={id}
        name={id}
        {...props}
      />
    </p>
  );
}
