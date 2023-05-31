import clsx from "clsx";
import Styles from "./Button.module.css";

type Variant = "outline" | "text";
type Sizes = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Variant;
  startIcon?: string;
  endIcon?: string;
  sizes?: Sizes;
  color?: "primary" | "secondary" | "danger";
  disableShadow?: boolean;
  className?: string;
}
export const Button = ({
  children,
  variant,
  startIcon,
  endIcon,
  sizes = "md",
  disableShadow,
  color,
  className,
  ...props
}: ButtonProps) => {
  const classNames = clsx(
    {
      [Styles.Button]: true,
      ...(variant && {
        [Styles[variant]]: variant,
      }),
      [Styles.disableShadow]: disableShadow,
      [Styles[sizes]]: sizes,
      ...(color && {
        [Styles[color]]: color,
      }),
    },
    [className]
  );
  return (
    <>
      <button className={classNames} {...props}>
        {startIcon && <p>startIcon</p>}
        {children}
        {endIcon && <p>endIcon</p>}
      </button>
    </>
  );
};
