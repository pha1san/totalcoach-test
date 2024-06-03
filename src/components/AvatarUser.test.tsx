import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import AvatarUser from "./AvatarUser";

describe("AvatarUser", () => {
  it("renders the avatar correctly", () => {
    render(<AvatarUser />);
    const avatar = screen.getByText("PH");
    expect(avatar).toBeInTheDocument();
  });

  it("renders the user information when showTitle is true", () => {
    render(<AvatarUser showTitle={true} />);
    const userName = screen.getByText("Phaisan");
    const userAlias = screen.getByText("phai");

    expect(userName).toBeInTheDocument();
    expect(userAlias).toBeInTheDocument();
  });

  it("does not render the user information when showTitle is false", () => {
    render(<AvatarUser showTitle={false} />);
    const userName = screen.queryByText("Phaisan");
    const userAlias = screen.queryByText("phai");

    expect(userName).not.toBeInTheDocument();
    expect(userAlias).not.toBeInTheDocument();
  });
});
