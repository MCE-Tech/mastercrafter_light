/** @vitest-environment jsdom */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { ArtistsSection } from "../artists-section";
import { vi, describe, it, expect } from "vitest";

vi.mock("embla-carousel-autoplay", () => ({
  default: () => ({ name: "autoplay" }),
}));

vi.mock("@/components/ui/carousel", async () => {
  const React = await import("react")
  return {
    Carousel: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    CarouselContent: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    CarouselItem: ({ children, ...props }: any) => <div role="group" aria-roledescription="slide" {...props}>{children}</div>,
  }
})

// Provide deterministic artist data
vi.mock("@/data/artistOverview", () => ({
  ARTISTS: [
    {
      id: 1,
      name: "Integration Artist",
      slug: "integration-artist",
      image: "int.jpg",
      tags: ["Tag"],
      artistType: "Musician",
      score: 80,
    },
  ],
}));

describe("ArtistsSection integration navigation", () => {
  it("navigates to artist profile page on link click", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<ArtistsSection />} />
          <Route
            path="/artist/:slug"
            element={<div data-testid="artist-profile">Artist Profile Page</div>}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId("artists-row-carousel")).toBeInTheDocument();
    expect(screen.getAllByTestId("artist-row-slide")).toHaveLength(1);

    const [link] = screen.getAllByRole("link", { name: /view profile of integration artist/i });
    expect(link).toBeInTheDocument();
    expect(screen.getAllByText("Musician").length).toBeGreaterThan(0);
    expect(screen.queryByText("Craft Score")).not.toBeInTheDocument();

    await userEvent.click(link);

    // After navigation, the mock profile component should be rendered
    expect(screen.getByTestId("artist-profile")).toBeInTheDocument();
  });
});
