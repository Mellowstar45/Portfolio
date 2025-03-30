import type React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Skills } from "../skills";

vi.mock("next/font/local", () => ({
  default: () => ({
    className: "mocked-font-class",
  }),
}));

vi.mock("../utils/fonts", () => ({
  aptos: { className: "mock-aptos-font" },
  extraaptos: { className: "mock-extraaptos-font" },
}));

vi.mock("../shared/box", () => ({
  Box: ({
    children,
    title,
    id,
  }: {
    children: React.ReactNode;
    title: string;
    id: string;
  }) => (
    <div data-testid={`box-${id}`}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  ),
}));

describe("Skills Component", () => {
  beforeEach(() => {
    render(<Skills />);
  });

  it("renders the Skills component with correct title", () => {
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  it("renders technology skills correctly", () => {
    expect(screen.getByText("HTML5")).toBeInTheDocument();
    expect(screen.getByText("CSS3")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("PHP")).toBeInTheDocument();
    expect(screen.getByText("C#")).toBeInTheDocument();
  });

  it('renders the "and more in progress..." text', () => {
    expect(screen.getByText("and more in progress...")).toBeInTheDocument();
  });

  it("renders the Languages section with correct title", () => {
    expect(screen.getByText("Languages")).toBeInTheDocument();
  });

  it("renders all languages with their levels correctly", () => {
    expect(screen.getByText("French")).toBeInTheDocument();
    expect(screen.getByText("Native")).toBeInTheDocument();

    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("C2")).toBeInTheDocument();

    expect(screen.getByText("German")).toBeInTheDocument();
    expect(screen.getByText("A1")).toBeInTheDocument();
  });

  it("renders images with correct alt text", () => {
    expect(screen.getByAltText("HTML5 icon")).toBeInTheDocument();
    expect(screen.getByAltText("CSS3 icon")).toBeInTheDocument();
    expect(screen.getByAltText("JavaScript icon")).toBeInTheDocument();
    expect(screen.getByAltText("React icon")).toBeInTheDocument();
    expect(screen.getByAltText("GitHub icon")).toBeInTheDocument();
  });

  it("renders skill icons with correct structure", () => {
    const htmlSkill = screen.getByText("HTML5").closest("div");
    expect(htmlSkill).toHaveClass(
      "bg-white rounded-lg p-3 flex items-center gap-3 shadow-sm max-w-[200px] mx-auto w-full"
    );
    const htmlIcon = screen.getByAltText("HTML5 icon");
    expect(htmlIcon).toHaveClass("w-9 h-9");
    expect(htmlIcon).toHaveAttribute("src", "/html-5.png");
  });

  it("renders language items with correct structure", () => {
    const frenchLanguage = screen.getByText("French").closest("div");
    expect(frenchLanguage).toHaveClass(
      "bg-[#F2956A] rounded-full px-8 py-3 flex justify-between items-center w-full"
    );
    expect(frenchLanguage).toContainElement(screen.getByText("Native"));
  });
});
