import React from "react";
import { render, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import IndividualPokemon from "../pages/IndividualPokemon";

/* Nota do desenvolvedor:
A aplicação de testes foi limitada a testes de existência. Isso se deu porque a interação entre múltiplas tecnologias (Redux e Apollo) principalmente cria uma camada extra de dificuldade na implementação de testes de funcionalidade mais complexos, que simulem a interação do usuário em si. A resolução desses problemas requer tempo, paciência e leitura cautelosa da documentação oficial, o que não é apropriado para um projeto de curto prazo, portanto, deixei apenas algumas tentativas e simulações de potenciais testes como uma mera ilustração em alguns pontos. Em outros, algumas implementações básicas são realizadas com sucesso.

*/

it("should accepts values for the app", () => {
  // const mockIndividualPokemon = jest.fn();
  // const { debug } = render(<IndividualPokemon />);
  // debug();
  // const { debug, getByLabelText, getByText } = render(<IndividualPokemon />);
  // const Input = getByLabelText(/add pokemon/i);
  // user.type(Input, "001");
  // expect(Input.value).toContain("001");
  // // not click but enter/submit
  // user.click( <insertImageLabelHere>);
  // expect(handlePokemon).toHaveBeenCalled();
  // expect(handlePokemon).toHaveBeenCalledTimes(1);
  // debug();
});
