import { render, fireEvent } from "@testing-library/react";
import PasswordInput from "./PasswordInput";

describe("PasswordInput component", () => {
  let inputElement;
  let reportInputError;

  beforeEach(() => {
    reportInputError = jest.fn();

    const { getByRole } = render(
      <PasswordInput
        id="password"
        name="password"
        reportInputError={reportInputError}
      />
    );

    inputElement = getByRole("textbox", { name: /password/i });
  });

  it("should start with no errors", () => {
    expect(reportInputError).not.toHaveBeenCalled();
  });

  it("should report error when password is too short", () => {
    fireEvent.change(inputElement, { target: { value: "abc" } });
    fireEvent.blur(inputElement);
    expect(reportInputError).toHaveBeenCalledWith({
      elementName: "password",
      isError: true,
    });
  });

  it("should report no error when password is long enough", () => {
    fireEvent.change(inputElement, { target: { value: "abcdef" } });
    fireEvent.blur(inputElement);
    expect(reportInputError).toHaveBeenCalledWith({
      elementName: "password",
      isError: false,
    });
  });
});
