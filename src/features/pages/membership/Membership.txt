/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import React from "react";
import { expect } from "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import Membership from "./Membership";
import Swal from "sweetalert2";

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

describe("Membership Component", () => {
  it("displays BMI calculation result for unclearderweight", async () => {
    Swal.fire.mockResolvedValue({ isConfirmed: true });

    const { getByLabelText, getByText, getByRole } = render(<Membership />);
    const weightInput = getByLabelText("Weight (kg):");
    const heightInput = getByLabelText("Height (cm):");
    const calculateButton = getByRole("button", { name: "Calculate BMI" });

    fireEvent.change(weightInput, { target: { value: "50" } });
    fireEvent.change(heightInput, { target: { value: "170" } });
    fireEvent.click(calculateButton);

    await waitFor(() => {
      const resultMessage = getByText(/under weight/i);
      expect(resultMessage).toBeInTheDocument();
      expect(Swal.fire).toHaveBeenCalledWith({
        icon: "info",
        text: "Provide a valid Weight!",
        showConfirmButton: false,
        timer: 2500,
      });
    });
  });

  it("displays BMI calculation result for normal weight", async () => {
    // Similar to the previous test case, but with different inputs and expected messages
  });

  it("displays BMI calculation result for overweight", async () => {
    // Similar to the previous test cases, but with different inputs and expected messages
  });
});
