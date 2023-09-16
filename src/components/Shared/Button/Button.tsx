import { LegacyRef, ReactNode, forwardRef } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  buttonStyle?: 'primary' | 'secondary' | 'tertiary';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  extraClass?: string;
  onClick?: () => void;
}

const Button = forwardRef(({ children, buttonStyle = 'primary', fullWidth, disabled, type = 'button', extraClass, onClick }: ButtonProps, ref: LegacyRef<HTMLButtonElement>) => {
  const baseClasses = `${styles.button} ${fullWidth && styles.buttonFull} ${extraClass}`;
  return {
    primary: (
      <button ref={ref} type={type} disabled={disabled} className={`${baseClasses} ${styles.buttonPrimary}`} onClick={onClick}>
        {children}
      </button>
    ),
    secondary: (
      <button ref={ref} type={type} disabled={disabled} className={`${baseClasses} ${styles.buttonSecondary}`} onClick={onClick}>
        {children}
      </button>
    ),
    tertiary: (
      <button ref={ref} type={type} disabled={disabled} className={`${baseClasses} ${styles.buttonTertiary}`} onClick={onClick}>
        {children}
      </button>
    )
  }[buttonStyle] as JSX.Element;
});

Button.displayName = 'Button';

export default Button;
