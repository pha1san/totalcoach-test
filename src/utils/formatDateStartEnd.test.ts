import dayjs from "dayjs";
import { describe, it, expect } from "vitest";

import { formatDateStartEnd } from "./format";

describe("formatDateStartEnd", () => {
  it("should format the start and end dates correctly", () => {
    const startTime = "2024-04-10T02:00:00.000Z";
    const startEnd = "2024-04-10T05:00:00.000Z";

    const result = formatDateStartEnd(startTime, startEnd);

    expect(result).toBe("10 Apr 2024 02:00 PM - 10 Apr 2024 05:00 PM");
  });
});
