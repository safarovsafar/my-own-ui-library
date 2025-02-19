import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none px-5 py-2 cursor-pointer ",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        danger: "bg-red-600 text-white hover:bg-red-700",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        outline: "border border-gray-300 text-black dark:text-white hover:bg-gray-100",
        ghost: "text-gray-600 hover:bg-gray-100",
      }
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default function Button({ variant = "primary", className = "", ...props }) {
  return (
    <button className={`${buttonVariants({ variant })} ${className}`} {...props} />
  );
}
