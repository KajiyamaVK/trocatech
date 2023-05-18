import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EmailInput from "./EmailInput";

describe("EmailInput", () => {
  test("renders without crashing", () => {
    const { getByLabelText } = render(
      <EmailInput id="email" aria-label="E-mail" />
    );
    expect(getByLabelText("E-mail")).toBeInTheDocument();
  });

  test("displays error message for invalid email", () => {
    const reportInputError = jest.fn();
    const { getByLabelText, getByText } = render(
      <EmailInput
        id="email"
        aria-label="E-mail"
        reportInputError={reportInputError}
      />
    );

    fireEvent.change(getByLabelText("E-mail"), {
      target: { value: "invalid_email" },
    });

    fireEvent.blur(getByLabelText("E-mail"));

    expect(getByText("Email inválido.")).toBeInTheDocument();
    expect(reportInputError).toBeCalledWith({
      elementName: "email",
      isError: true,
    });
  });

  test("does not display error for valid email", () => {
    const reportInputError = jest.fn();
    const { getByLabelText, queryByText } = render(
      <EmailInput
        id="email"
        aria-label="E-mail"
        reportInputError={reportInputError}
      />
    );

    fireEvent.change(getByLabelText("E-mail"), {
      target: { value: "test@example.com" },
    });

    fireEvent.blur(getByLabelText("E-mail"));

    expect(queryByText("Email inválido.")).not.toBeInTheDocument();
    expect(reportInputError).toBeCalledWith({
      elementName: "email",
      isError: false,
    });
  });
});
