import clsx from "clsx";
import style from "./Input.module.css";

interface Props {
  inputName: string;
  labelText: string;
  placeholder: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  className?: string;
  dataTestIdPrefix?: string;
  size?: "sm" | "md";
  fullWidth?: boolean;
  value?: string;
  multiline?: boolean;
}

export const Input = ({
  inputName,
  labelText,
  placeholder,
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  className,
  dataTestIdPrefix,
  size,
  fullWidth,
  value,
  multiline,
}: Props) => {
  const classNames = clsx(
    {
      [style.input]: true,
      [style.error]: error,
      [style.disabled]: disabled,
      [style.hasStartIcon]: !!startIcon,
      [style.hasEndIcon]: !!endIcon,
      ...(size && {
        [style[size]]: size,
      }),
      [style.fullWidth]: fullWidth,
    },
    [className]
  );

  return (
    <fieldset
      data-testid={dataTestIdPrefix ? `${dataTestIdPrefix}-input` : "input"}
      className={classNames}
    >
      {!multiline && (
        <>
          <label htmlFor={inputName}>{labelText}</label>
          <div className={style.inputContainer}>
            {startIcon && (
              <span className={`material-icons ${style.startIcon}`}>
                {startIcon}
              </span>
            )}
            <input
              type="text"
              name={inputName}
              id={inputName}
              placeholder={placeholder}
              disabled={disabled}
              {...(value && {
                value: value,
              })}
            />

            {endIcon && (
              <span className={`material-icons ${style.endIcon}`}>
                {endIcon}
              </span>
            )}
          </div>
          {helperText && (
            <span
              className={style.helperText}
              data-testid={
                dataTestIdPrefix
                  ? `${dataTestIdPrefix}-helperText`
                  : "helperText"
              }
            >
              {helperText}
            </span>
          )}
        </>
      )}
      {multiline && (
        <>
          <label htmlFor={inputName}>{labelText}</label>
          <textarea
            rows={5}
            cols={30}
            placeholder={placeholder}
            className={style.multiline}
          ></textarea>
        </>
      )}
    </fieldset>
  );
};
