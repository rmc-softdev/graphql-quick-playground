import React from "react";
import { render, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import IndividualPokemon from "../pages/IndividualPokemon";

it("should accepts values for the app", () => {
  const mockIndividualPokemon = jest.fn();
  // const { debug } = render(<IndividualPokemon />);
  // debug();

  // const { debug, getByLabelText, getByText } = render(<IndividualPokemon />);
  // const Input = getByLabelText(/add pokemon/i);
  // user.type(Input, "001");
  // expect(Input.value).toContain("001");
  // // not click but enter/submit
  // user.click(GetImageByAriaLABEL);
  // expect(handlePokemon).toHaveBeenCalled();
  // expect(handlePokemon).toHaveBeenCalledTimes(1);
  // debug();
});
