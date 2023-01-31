import * as React from 'react';
import cn from 'classnames';

type FormInputProps = {
  label?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'large' | 'medium' | 'small' | 'extra-small';
  isBordered?: boolean;
  isGhost?: boolean;
  containerClassName?: string;
  addonElement?: React.ReactElement;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput: React.FC<FormInputProps> = ({
  label,
  variant,
  size,
  isBordered,
  isGhost,
  containerClassName,
  addonElement,
  className,
  ...rest
}) => {
  const inputClass = cn({
    input: true,
    'input-primary': variant === 'primary',
    'input-secondary': variant === 'secondary',
    'input-accent': variant === 'accent',
    'input-info': variant === 'info',
    'input-success': variant === 'success',
    'input-warning': variant === 'warning',
    'input-error': variant === 'error',
    'input-lg': size === 'large',
    'input-md': size === 'medium',
    'input-sm': size === 'small',
    'input-xs': size === 'extra-small',
    'input-ghost': isGhost,
    'input-bordered': isBordered,
    'w-full pr-16': addonElement !== undefined,
  });

  const renderInput = () => {
    const inputElement = <input className={cn(inputClass, className)} {...rest} />;
    if (!addonElement) {
      return inputElement;
    }

    return (
      <div className="input-group relative">
        {inputElement}
        {addonElement && addonElement}
      </div>
    );
  };

  return (
    <div className={cn('form-control', containerClassName)}>
      {label && (
        <label className="label">
          <span className="label-text text-base text-base-content-secondary">{label}</span>
        </label>
      )}
      {renderInput()}
    </div>
  );
};
