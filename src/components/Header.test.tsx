import { render, screen } from "@testing-library/react";
import mediaQuery from "css-mediaquery";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeAll } from "vitest";

import Header from "./Header";

const mockNavLinks = [
  { link: "/", title: "Home" },
  { link: "/lessons", title: "Lessons" },
  { link: "/practice", title: "Practice" },
  { link: "/coach-exercises", title: "Coach's exercises" },
  { link: "/event", title: "Event" },
  { link: "/calendar", title: "Calendar" },
  { link: "/support", title: "Support" },
  { link: "/account", title: "Account" },
];

//TODO: fix type issues
const createMatchMedia = (width: number) => {
  return (query: string) => ({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    matches: mediaQuery.match(query, {
      width,
    }),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    addListener: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    removeListener: () => {},
  });
};

describe("Header", () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    (window as any).matchMedia = createMatchMedia(1400);
  });

  it("renders the logo correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const logo = screen.getByAltText(/Your SVG/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/src/assets/logo.svg");
  });

  it("renders navigation links correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    mockNavLinks.forEach((link) => {
      const navLink = screen.getByText(link.title);
      expect(navLink).toBeInTheDocument();
      expect(navLink.closest("a")).toHaveAttribute("href", link.link);
    });
  });

  it("renders the Book Lesson button", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const bookLessonButton = screen.getByRole("button", { name: /Book Lesson/i });
    expect(bookLessonButton).toBeInTheDocument();
  });

  it("renders the user avatar and name correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const avatar = screen.getByText("PH");
    const userName = screen.getByText("Phaisan");
    const userAlias = screen.getByText("phai");

    expect(avatar).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(userAlias).toBeInTheDocument();
  });
});
