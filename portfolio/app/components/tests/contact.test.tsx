import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../contact";

vi.mock("../../actions/send-mail", () => ({
  default: vi
    .fn()
    .mockResolvedValue({ success: true, message: "Email sent successfully." }),
}));

vi.mock("../utils/fonts", () => ({
  aptos: { className: "mock-aptos-font" },
}));

vi.mock("next/font/local", () => ({
  default: () => ({
    className: "mocked-font-class",
  }),
}));

const scrollToMock = vi.fn();
window.scrollTo = scrollToMock;

describe("Contact Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the contact form correctly", () => {
    render(<Contact />);

    expect(screen.getByText("Contact Me")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Subject")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Send Message" })
    ).toBeInTheDocument();
  });

  it("updates input values when user types", () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText("Email");
    const subjectInput = screen.getByLabelText("Subject");
    const contentInput = screen.getByLabelText("Message");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
    fireEvent.change(contentInput, {
      target: { value: "Test Message Content" },
    });

    expect(emailInput).toHaveValue("test@example.com");
    expect(subjectInput).toHaveValue("Test Subject");
    expect(contentInput).toHaveValue("Test Message Content");
  });

  it("submits the form and calls sendMail with correct data", async () => {
    const sendMail = (await import("../../actions/send-mail")).default;
    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Subject"), {
      target: { value: "Test Subject" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Test Message Content" },
    });

    const form = screen.getByText("Send Message").closest("form");
    fireEvent.submit(form as Element);

    await waitFor(() => {
      expect(sendMail).toHaveBeenCalledWith(
        "test@example.com",
        "Test Subject",
        "Test Message Content"
      );
    });
  });

  it("resets form fields and scrolls to top after submission", async () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText("Email");
    const subjectInput = screen.getByLabelText("Subject");
    const contentInput = screen.getByLabelText("Message");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
    fireEvent.change(contentInput, {
      target: { value: "Test Message Content" },
    });

    const form = screen.getByText("Send Message").closest("form");
    fireEvent.submit(form as Element);

    await waitFor(() => {
      expect(emailInput).toHaveValue("");
      expect(subjectInput).toHaveValue("");
      expect(contentInput).toHaveValue("");
      expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    });
  });
});
