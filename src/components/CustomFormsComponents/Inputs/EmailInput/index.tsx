import React, { useState, useEffect } from "react";

interface IResponseElement {
  elementName: string;
  isError: boolean;
}

interface EmailInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  report_input_error?: (input: IResponseElement) => void;
}

/**
 * `EmailInput` is a React functional component that provides a controlled input field for email addresses.
 * It performs validation on the input to ensure it only contains valid email addresses. If an invalid email is entered,
 * it displays an error message. The component also reports back any input error state through a callback function.
 *
 * @component
 * @param {object} props - Properties passed to component
 * @param {string} id - The id of the input element
 * @param {string} name - The name of the input element
 * @param {string} type - The type of the input element. Should be "email" for this component
 * @param {string} autoComplete - Whether to allow autocomplete of the input element
 * @param {string} aria-label - The aria-label of the input element
 * @param {boolean} required - Whether the input field is required or not
 * @param {string} className - The CSS classes to apply to the input element
 * @param {function} onChange - Function to call when the input value changes
 * @param {string} value - The current value of the input element
 * @param {function} report_input_error - Function to report back the error state of the input
 *
 * @example
 * <EmailInput
 *   id="email"
 *   name="email"
 *   type="email"
 *   autoComplete="email"
 *   aria-label="E-mail"
 *   required
 *   className="your-class-name"
 *   onChange={e => setEmail(e.target.value)}
 *   value={email}
 *   report_input_error={({elementName, isError}) => console.log(`Error state of ${elementName} is ${isError}`)}
 * />
 *
 * @returns {React.ElementType} Returns a controlled input field for email addresses with validation and error reporting capabilities
 */

const EmailInput: React.FC<EmailInputProps> = ({
  report_input_error,
  value = "",
  onChange,
  onBlur,
  name,
  ...props
}) => {
  const [email, setEmail] = useState<string>((value || "").toString());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setEmail(value);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(null);
    const newValue = e.target.value;
    setEmail(newValue);
    onChange && onChange(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (email) {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;
      const isValid = emailRegex.test(email);

      if (!isValid) {
        setError("Email inválido.");
      } else {
        setError(null);
      }
    }
    onBlur && onBlur(e);
  };

  useEffect(() => {
    if (report_input_error) {
      report_input_error({ elementName: name!, isError: !!error });
    }
  }, [error, name, report_input_error]);

  return (
    <div className="flex flex-col">
      <input
        {...props}
        value={email}
        onBlur={handleBlur}
        onChange={handleInputChange}
      />
      {error && <small className="text-red-500 text-sm">{error}</small>}
    </div>
  );
};

export default EmailInput;
