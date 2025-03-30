import { render, screen } from "@testing-library/react";
import Home from "../home";
import { vi, describe, it, expect } from "vitest";

vi.mock("../shared/rotate", () => ({
  default: ({ words }: { words: string[] }) => <span>{words[0]}</span>,
}));

vi.mock("../hooks/useEntranceAnimation", () => ({
  useEntranceAnimation: vi.fn(),
}));
vi.mock("next/font/local", () => ({
  default: () => ({
    className: "mocked-font-class",
  }),
}));

describe("Home Component", () => {
  it("renders heading with name", () => {
    render(<Home />);
    expect(screen.getByText(/Hello, Im/i)).toBeInTheDocument();
    expect(screen.getByText(/Nicolas Ramanantsoa/i)).toBeInTheDocument();
  });

  it("renders rotating text placeholder", () => {
    render(<Home />);
    expect(screen.getByText(/full stack developer/i)).toBeInTheDocument();
  });

  it("renders the button with correct text", () => {
    render(<Home />);
    const button = screen.getByRole("link", { name: /Take a look/i });
    expect(button).toHaveAttribute("href", "#about");
  });
});
