import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { vi } from "vitest";

vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://your-supabase-url.supabase.co");
vi.stubEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY", "your-anon-key");
expect.extend(matchers);

afterEach(() => {
  cleanup();
});
