import { ErrorMessage, Field, useField } from 'formik';
import styles from './Input.module.css';

interface InputProps {
  label: string;
  inputName: string;
  placeholder: string;
  disabled?: boolean;
}

function Input({ label, inputName, placeholder, disabled }: InputProps) {
  const [, meta] = useField(inputName);
  const isError = meta.error && meta.touched;

  return (
    <div className={styles.inputBox}>
      <label className={`${styles.inputLabel} ${isError && styles.inputFieldError}`}>{label}</label>
      <Field className={styles.inputField} name={inputName} placeholder={placeholder} disabled={disabled} value={meta.value} />
      {isError && (
        <div className={styles.inputFieldError}>
          <ErrorMessage name={inputName} />
        </div>
      )}
    </div>
  );
}

export default Input;
