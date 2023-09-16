import { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  buttonStyle?: 'primary' | 'secondary';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

function Button({ children, buttonStyle = 'primary', fullWidth, disabled, type = 'button', onClick }: ButtonProps) {
  const baseClasses = `${styles.button} ${fullWidth && styles.buttonFull}`;
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
    )
  }[buttonStyle] as JSX.Element;
}

export default Button;
