import { ReactNode } from 'react';
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

function Button({ children, buttonStyle = 'primary', fullWidth, disabled, type = 'button', extraClass, onClick }: ButtonProps) {
  const baseClasses = `${styles.button} ${fullWidth && styles.buttonFull} ${extraClass}`;
  return {
    primary: (
      <button type={type} disabled={disabled} className={`${baseClasses} ${styles.buttonPrimary}`} onClick={onClick}>
        {children}
      </button>
    ),
    secondary: (
      <button type={type} disabled={disabled} className={`${baseClasses} ${styles.buttonSecondary}`} onClick={onClick}>
        {children}
      </button>
    ),
    tertiary: (
      <button type={type} disabled={disabled} className={`${baseClasses} ${styles.buttonTertiary}`} onClick={onClick}>
        {children}
      </button>
    )
  }[buttonStyle] as JSX.Element;
}

export default Button;
