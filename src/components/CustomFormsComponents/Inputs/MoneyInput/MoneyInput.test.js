import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MoneyInput from "./MoneyInput";

describe("MoneyInput", () => {
  let onChangeMock;
  let errorFunctionMock;
  let input;

  beforeEach(() => {
    onChangeMock = jest.fn();
    errorFunctionMock = jest.fn();

    const { getByPlaceholderText } = render(
      <MoneyInput
        placeholder="0,00"
        onChange={onChangeMock}
        errorFunction={errorFunctionMock}
      />
    );

    input = getByPlaceholderText("0,00");
  });

  it("calls onChange with value when input changes", () => {
    fireEvent.change(input, { target: { value: "100" } });
    expect(onChangeMock).toHaveBeenCalledWith("100");
  });

  it("formats the input value onBlur", () => {
    fireEvent.change(input, { target: { value: "100" } });
    fireEvent.blur(input);
    expect(input.value).toBe("100.00");
  });

  it("handles leading dot", () => {
    fireEvent.change(input, { target: { value: "." } });
    expect(input.value).toBe("0.");
  });

  it("handles empty string", () => {
    fireEvent.change(input, { target: { value: "" } });
    expect(input.value).toBe("");
  });

  it("does not allow letters", async () => {
    fireEvent.change(input, { target: { value: "100a" } });
    await waitFor(() =>
      expect(errorFunctionMock).toHaveBeenCalledWith({
        elementName: "",
        isError: true,
      })
    );
  });

  it("does not allow more than one dot", async () => {
    fireEvent.change(input, { target: { value: "100.00.00" } });
    await waitFor(() =>
      expect(errorFunctionMock).toHaveBeenCalledWith({
        elementName: "",
        isError: true,
      })
    );
  });

  it("does not allow more than two decimal places", async () => {
    fireEvent.change(input, { target: { value: "100.000" } });
    await waitFor(() =>
      expect(errorFunctionMock).toHaveBeenCalledWith({
        elementName: "",
        isError: true,
      })
    );
  });

  it("allows valid values", async () => {
    fireEvent.change(input, { target: { value: "100.00" } });
    await waitFor(() =>
      expect(errorFunctionMock).toHaveBeenCalledWith({
        elementName: "",
        isError: false,
      })
    );
  });
});
