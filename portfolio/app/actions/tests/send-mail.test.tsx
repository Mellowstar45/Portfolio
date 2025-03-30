import { describe, it, expect, vi, beforeEach } from "vitest";
import sendMail from "../send-mail";

vi.mock("lowback-admin-mailer", () => {
  const mockSend = vi.fn().mockResolvedValue(undefined);
  const mockTo = vi.fn().mockReturnThis();
  const mockSubject = vi.fn().mockReturnThis();

  return {
    default: vi.fn().mockImplementation(() => ({
      subject: mockSubject,
      to: mockTo,
      send: mockSend,
    })),
  };
});

vi.mock("process", () => ({
  env: {
    SECRET_KEY: "mocked-secret-key-for-testing",
  },
}));

describe("sendMail Server Action", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns error when fields are missing", async () => {
    const result = await sendMail("", "Subject", "Content");
    expect(result).toEqual({
      success: false,
      message: "All fields are required.",
    });

    const result2 = await sendMail("email@example.com", "", "Content");
    expect(result2).toEqual({
      success: false,
      message: "All fields are required.",
    });

    const result3 = await sendMail("email@example.com", "Subject", "");
    expect(result3).toEqual({
      success: false,
      message: "All fields are required.",
    });
  });

  it("sends email with correct data and returns success", async () => {
    const AdminMailer = (await import("lowback-admin-mailer")).default;
    const mockMailerInstance = new AdminMailer("mocked-secret-key-for-testing");

    const result = await sendMail(
      "test@example.com",
      "Test Subject",
      "Test Content"
    );

    expect(AdminMailer).toHaveBeenCalledWith("mocked-secret-key-for-testing");
    expect(mockMailerInstance.subject).toHaveBeenCalledWith("Test Subject");
    expect(mockMailerInstance.to).toHaveBeenCalledWith(
      "nicolasramanantsoa345@gmail.com"
    );
    expect(mockMailerInstance.send).toHaveBeenCalledWith(
      "Email: test@example.com\n\nTest Content"
    );
    expect(result).toEqual({
      success: true,
      message: "Email sent successfully.",
    });
  });

  it("handles errors from the mailer", async () => {
    const AdminMailer = (await import("lowback-admin-mailer")).default;
    const mockMailerInstance = new AdminMailer("mocked-secret-key-for-testing");

    mockMailerInstance.send.mockRejectedValueOnce("Sending failed");

    const result = await sendMail(
      "test@example.com",
      "Test Subject",
      "Test Content"
    );

    expect(result).toEqual({ success: false, message: "Sending failed" });
  });
});
