import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { Navbar } from "../navbar";

global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

window.scrollTo = vi.fn();

describe("Navbar Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    Object.defineProperty(window, "scrollY", { value: 0, writable: true });

    const sections = ["home", "about", "projects", "skills", "contact"];
    sections.forEach((section) => {
      const element = document.createElement("section");
      element.id = section;
      Object.defineProperty(element, "offsetTop", {
        value: sections.indexOf(section) * 500,
      });
      Object.defineProperty(element, "offsetHeight", { value: 500 });
      document.body.appendChild(element);
    });
  });

  it("renders the navbar correctly", () => {
    render(<Navbar />);

    const mainNav = screen.getByLabelText("Main navigation");
    expect(mainNav).toBeInTheDocument();

    const navItems = within(mainNav).getAllByRole("menuitem");
    expect(navItems.length).toBe(5); 

    const mainNavTexts = navItems.map((item) => item.textContent);
    expect(mainNavTexts.includes("Home")).toBe(true);
    expect(mainNavTexts.includes("About")).toBe(true);
    expect(mainNavTexts.includes("Projects")).toBe(true);
    expect(mainNavTexts.includes("Skills")).toBe(true);
    expect(mainNavTexts.includes("Contact")).toBe(true);
  });

  it("toggles mobile menu when menu button is clicked", () => {
    render(<Navbar />);

    const mobileMenu = document.getElementById("mobile-menu");
    expect(mobileMenu).toHaveAttribute("aria-hidden", "true");

    const menuButton = screen.getByRole("button", {
      name: /open menu/i,
    });
    fireEvent.click(menuButton);

    expect(mobileMenu).toHaveAttribute("aria-hidden", "false");

    const closeButton = screen.getByRole("button", {
      name: /close menu/i,
    });
    fireEvent.click(closeButton);

    expect(mobileMenu).toHaveAttribute("aria-hidden", "true");
  });

  it("scrolls to the correct section when a nav item is clicked", () => {
    render(<Navbar />);

    const mainNav = screen.getByLabelText("Main navigation");

    const aboutLink = within(mainNav).getAllByText("About")[0];
    fireEvent.click(aboutLink);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: "smooth",
    });
  });

  it("shows sidebar when scrolled", () => {
    render(<Navbar />);

    const sidebar = screen.getByLabelText("Side navigation");
    expect(sidebar).toHaveAttribute("aria-hidden", "true");

    Object.defineProperty(window, "scrollY", { value: 150 });
    fireEvent.scroll(window);

    expect(sidebar).toHaveAttribute("aria-hidden", "false");
  });

  it("sets active section based on scroll position", () => {
    render(<Navbar />);

    Object.defineProperty(window, "scrollY", { value: 550 });
    fireEvent.scroll(window);

    const activeLinks = document.querySelectorAll('a[aria-current="page"]');
    expect(activeLinks.length).toBeGreaterThan(0);

    const hasActiveAboutLink = Array.from(activeLinks).some((link) =>
      link.textContent?.includes("About")
    );

    expect(hasActiveAboutLink).toBe(true);
  });

  it("has proper accessibility attributes", () => {
    render(<Navbar />);

    const mainNav = screen.getByLabelText("Main navigation");
    expect(mainNav).toBeInTheDocument();

    const menuButton = screen.getByRole("button", {
      name: /open menu/i,
    });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveAttribute("aria-controls", "mobile-menu");

    const sidebar = screen.getByLabelText("Side navigation");
    expect(sidebar).toHaveAttribute("aria-hidden", "true");

    const icons = document.querySelectorAll('[aria-hidden="true"]');
    expect(icons.length).toBeGreaterThan(0);
  });
});
