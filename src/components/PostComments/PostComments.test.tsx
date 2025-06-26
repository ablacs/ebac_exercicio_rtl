import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  test("Deve adicionar um comentário", () => {
    render(<PostComment />);
    const comentario1 = "comentario 1";
    const comentario2 = "comentario 2";
    fireEvent.change(screen.getByTestId("comment-input"), {
      target: { value: comentario1 },
    });
    fireEvent.click(screen.getByText("Comentar"));
    fireEvent.change(screen.getByTestId("comment-input"), {
      target: { value: comentario2 },
    });
    fireEvent.click(screen.getByText("Comentar"));
    expect(screen.getByText(comentario1)).toBeInTheDocument();
    expect(screen.getByText(comentario2)).toBeInTheDocument();
    expect(screen.getAllByTestId("comment-item")).toHaveLength(2);
  });
});
