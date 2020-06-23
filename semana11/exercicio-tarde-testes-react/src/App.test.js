import React from "react";
import {
  render,
  fireEvent,
  getByPlaceholderText,
} from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

describe("Funcionalidades App", () => {
  test("Input recebe valor digitado", () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const novoPost = getByPlaceholderText("Novo post");

    fireEvent.change(novoPost, { target: { value: "texto" } });

    expect(novoPost).toHaveValue("texto");
  });
  test("Botão adiciona novo post com o valor digitado a lista ao ser clicado", () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const novoPost = getByPlaceholderText("Novo post");
    const botaoEnviar = getByText(/Adicionar/);
    fireEvent.change(novoPost, { target: { value: "texto-a" } });
    fireEvent.click(botaoEnviar);
    fireEvent.change(novoPost, { target: { value: "" } });

    expect(getByText("texto-a")).toBeInTheDocument();
  });
  test("Botão curtir funciona (muda para descurtir após clicado)", () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const novoPost = getByPlaceholderText("Novo post");
    const botaoEnviar = getByText(/Adicionar/);
    fireEvent.change(novoPost, { target: { value: "texto-a" } });
    fireEvent.click(botaoEnviar);
    const botaoCurtir = getByText(/Curtir/);
    fireEvent.click(botaoCurtir);

    expect(getByText("Descurtir")).toBeInTheDocument();
  });
  test("Botão deleta post ao ser clicado", () => {
    const { getByText, getByPlaceholderText, queryByText } = render(<App />);

    const novoPost = getByPlaceholderText("Novo post");
    const botaoEnviar = getByText(/Adicionar/);
    fireEvent.change(novoPost, { target: { value: "texto-a" } });
    fireEvent.click(botaoEnviar);
    fireEvent.change(novoPost, { target: { value: "" } });
    const botaoApagar = getByText(/Apagar/);
    fireEvent.click(botaoApagar);
    expect(queryByText("texto-a")).toBeNull();
  });
  test("Input de novo post é limpo após adicionar", () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const novoPost = getByPlaceholderText("Novo post");
    const botaoEnviar = getByText(/Adicionar/);
    fireEvent.change(novoPost, { target: { value: "texto-a" } });
    fireEvent.click(botaoEnviar);

    expect(novoPost).toHaveValue("");
  });
  test("Mensagem 'Nenhum post' aparece quando não há postagens", () => {
    const { getByText } = render(<App />);

    expect(getByText('Nenhum post')).toBeInTheDocument();
  });
  test("Mensagem 'Nenhum post' desaparece quando há ao menos uma postagem", () => {
    const { getByText, getByPlaceholderText, queryByText } = render(<App />);
    const novoPost = getByPlaceholderText("Novo post");
    const botaoEnviar = getByText(/Adicionar/);
    fireEvent.change(novoPost, { target: { value: "texto-a" } });

    fireEvent.click(botaoEnviar);

    expect(queryByText('Nenhum post')).toBeNull();
  });
  
  test("Contador de postagens funciona", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const novoPost = getByPlaceholderText("Novo post");
    const botaoEnviar = getByText(/Adicionar/);
    fireEvent.change(novoPost, { target: { value: "texto-a" } });
    fireEvent.click(botaoEnviar);
    fireEvent.change(novoPost, { target: { value: "texto-b" } });
    fireEvent.click(botaoEnviar);

    expect(getByText('Quantidade de posts: 2')).toBeInTheDocument();
  });
  test("Alerta de ação proibida ao tentar enviar post vazio", () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const novoPost = getByPlaceholderText("Novo post");
    const botaoEnviar = getByText(/Adicionar/);
    fireEvent.change(novoPost, { target: { value: "" } });
    fireEvent.click(botaoEnviar);

    expect(getByText('NÃO É PERMITIDO POST VAZIO')).toBeInTheDocument();
  });

});
