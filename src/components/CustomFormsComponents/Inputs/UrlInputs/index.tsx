import React, { useState, useEffect, useRef } from "react";

interface UrlInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
  > {
  value?: string;
  onChange?: (value: string) => void;
  isImage?: boolean;
  isPDF?: boolean;
}

const UrlInput: React.FC<UrlInputProps> = ({
  value: propValue = "",
  onChange,
  isImage,
  isPDF,
  ...props
}) => {
  const [value, setValue] = useState<string>(propValue);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue === "") {
      setError(null);
    } else if (/^http:\/\//.test(newValue)) {
      setError("URL insegura. Por favor, use URLs que iniciem com 'https://'.");
    } else if (/\s/.test(newValue)) {
      setError("URL inválida. Espaços não são permitidos em URLs.");
    } else if (isImage && !/\.(jpeg|jpg|gif|png)$/.test(newValue)) {
      setError(
        "URL de imagem inválida. Por favor, insira uma URL que aponte para uma imagem."
      );
    } else if (isPDF && !/\.pdf$/.test(newValue)) {
      setError(
        "URL de PDF inválida. Por favor, insira uma URL que aponte para um arquivo PDF."
      );
    } else {
      setError(null);
    }

    setValue(newValue);
    const cursorPosition = e.target.selectionStart;
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.selectionStart = cursorPosition;
        inputRef.current.selectionEnd = cursorPosition;
      }
    }, 0);
  };

  const handleBlur = () => {
    if (value !== "") {
      const newValue = value.startsWith("https://")
        ? value
        : "https://" + value;
      if (!/^https?:\/\/([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/.test(newValue)) {
        setError("URL inválida. Por favor, insira uma URL válida.");
      } else {
        setValue(newValue);
      }
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value, onChange]);

  return (
    <div className="flex flex-col">
      <input
        {...props}
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {error && <small className="text-red-500 text-sm">{error}</small>}
    </div>
  );
};

export default UrlInput;
