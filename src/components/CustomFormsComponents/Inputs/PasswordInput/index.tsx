/**
 * `PasswordInput` is a component that provides a password input field with various validation options.
 *
 * @component
 * @param {Object} props - Properties passed to the component.
 * @param {number} [props.minLength=6] - The minimum length of the password.
 * @param {boolean} [props.specialCharRequired=false] - Indicates whether the password should contain at least one special character.
 * @param {boolean} [props.uppercaseRequired=false] - Indicates whether the password should contain at least one uppercase letter.
 * @param {boolean} [props.numberRequired=false] - Indicates whether the password should contain at least one number.
 * @param {boolean} [props.onlyNumbers=false] - Indicates whether the password should contain only numbers.
 * @param {boolean} [props.onlyLetters=false] - Indicates whether the password should contain only letters.
 *
 * @example
 * <PasswordInput minLength={8} specialCharRequired={true} uppercaseRequired={true} />
 *
 * @returns {React.ElementType} Returns a password type input element with built-in password validation.
 */

import React, { useState, useEffect } from "react";

interface IResponseElement {
  elementName: string;
  isError: boolean;
}

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  minLength?: number;
  value?: string;
  specialCharRequired?: boolean;
  uppercaseRequired?: boolean;
  numberRequired?: boolean;
  onlyNumbers?: boolean;
  onlyLetters?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  report_input_error?: (input: IResponseElement) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  minLength = 6,
  value = "",
  specialCharRequired = false,
  uppercaseRequired = false,
  numberRequired = false,
  onlyNumbers = false,
  onlyLetters = false,
  name,
  onChange,
  report_input_error,
  ...props
}) => {
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>(value.toString());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(null);
    const newValue = e.target.value;
    setPassword(newValue);
    onChange && onChange(e);
  };

  useEffect(() => {
    if (report_input_error) {
      report_input_error({ elementName: name!, isError: !!error });
    }
  }, [error, name, report_input_error]);

  const validatePassword = (value: string) => {
    let errorMessages = [];
    if (value.length < minLength) {
      errorMessages.push(
        `A senha deve ter pelo menos ${minLength} caracteres.`
      );
    }
    if (specialCharRequired && !/[!@#$%^&*(),.?":{}|<>]/g.test(value)) {
      errorMessages.push(
        "A senha deve conter pelo menos um caracter especial."
      );
    }
    if (uppercaseRequired && !/[A-Z]/.test(value)) {
      errorMessages.push("A senha deve conter pelo menos uma letra maiúscula.");
    }
    if (numberRequired && !/[0-9]/.test(value)) {
      errorMessages.push("A senha deve conter pelo menos um número.");
    }
    if (onlyNumbers && !/^\d+$/.test(value)) {
      errorMessages.push("A senha deve conter apenas números.");
    }
    if (onlyLetters && !/^[A-Za-z]+$/.test(value)) {
      errorMessages.push("A senha deve conter apenas letras.");
    }

    setError(errorMessages.join(" "));
    return errorMessages.length === 0;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validatePassword(e.target.value);
    if (props.onBlur) props.onBlur(e);
  };

  return (
    <div className="flex flex-col">
      <input
        {...props}
        type="password"
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {error && <small className="text-red-500 text-sm">{error}</small>}
    </div>
  );
};

export default PasswordInput;
