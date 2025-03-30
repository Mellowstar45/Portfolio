/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { getProjects } from "../queries";
import { supabase } from "@/app/utils/client";

vi.mock("@/app/utils/client", () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        order: vi.fn(),
      })),
    })),
  },
}));

vi.mock("next/cache", () => ({
  unstable_cache: (fn: any) => fn,
}));

describe("getProjects", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return an array of projects when data is available", async () => {
    const mockData = [
      {
        id: 1,
        title: "Project 1",
        imageSrc: "image1.jpg",
        description: "Description 1",
        technologies: ["React", "Node.js"],
        githubUrl: "https://github.com/project1",
      },
    ];

    (supabase.from as any).mockReturnValue({
      select: vi.fn().mockReturnValue({
        order: vi.fn().mockResolvedValue({ data: mockData, error: null }),
      }),
    });

    const result = await getProjects();
    expect(result).toEqual(mockData);
  });

  it("should return an empty array when there is an error", async () => {
    (supabase.from as any).mockReturnValue({
      select: vi.fn().mockReturnValue({
        order: vi.fn().mockResolvedValue({
          data: null,
          error: new Error("Database error"),
        }),
      }),
    });

    const result = await getProjects();
    expect(result).toEqual([]);
  });
});
