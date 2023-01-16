import * as React from 'react';
import cn from 'classnames';

export type BadgeProps = {
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'large' | 'medium' | 'small' | 'extra-small';
  isOutline?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Badge: React.FC<BadgeProps> = ({ variant, size, isOutline, className, children, ...rest }) => {
  const badgeClass = cn({
    badge: true,
    'badge-primary': variant === 'primary',
    'badge-secondary': variant === 'secondary',
    'badge-accent': variant === 'accent',
    'badge-info': variant === 'info',
    'badge-success': variant === 'success',
    'badge-warning': variant === 'warning',
    'badge-error': variant === 'error',
    'badge-lg': size === 'large',
    'badge-md': size === 'medium',
    'badge-sm': size === 'small',
    'badge-xs': size === 'extra-small',
    'badge-outline': isOutline,
  });

  return (
    <div className={cn(badgeClass, className)} {...rest}>
      {children}
    </div>
  );
};

