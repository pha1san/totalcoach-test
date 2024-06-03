import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

import { FeedType } from "@/types/feed";

import Feed from "./Feed";

const mockFeed: FeedType = {
  id: "1",
  title: "Lesson Pack invite",
  coach: ["Coach 1", "Coach 2"],
  startTime: "2024-04-10T02:00:00.000Z",
  endTime: "2024-04-10T05:00:00.000Z",
  location: "2 Park Road, Grafton, Auckland, New Zealand",
};

describe("Feed", () => {
  it("renders the title correctly", () => {
    render(
      <BrowserRouter>
        <Feed feed={mockFeed} />
      </BrowserRouter>,
    );
    const title = screen.getByText(/Lesson Pack invite/i);
    expect(title).toBeInTheDocument();
  });

  it("renders the coach names correctly", () => {
    render(
      <BrowserRouter>
        <Feed feed={mockFeed} />
      </BrowserRouter>,
    );
    mockFeed.coach.forEach((coach) => {
      const coachName = screen.getByText(coach);
      expect(coachName).toBeInTheDocument();
    });
  });

  it("renders the date and time correctly", () => {
    render(
      <BrowserRouter>
        <Feed feed={mockFeed} />
      </BrowserRouter>,
    );
    const dateTime = screen.getByText(/10 Apr 2024 02:00 PM - 10 Apr 2024 05:00 PM/i);
    expect(dateTime).toBeInTheDocument();
  });

  it("renders the location correctly", () => {
    render(
      <BrowserRouter>
        <Feed feed={mockFeed} />
      </BrowserRouter>,
    );
    const location = screen.getByText(/2 Park Road, Grafton, Auckland, New Zealand/i);
    expect(location).toBeInTheDocument();
  });

  it("renders the forward button", () => {
    render(
      <BrowserRouter>
        <Feed feed={mockFeed} />
      </BrowserRouter>,
    );
    const forwardButton = screen.getByRole("button");
    expect(forwardButton).toBeInTheDocument();
  });
});
