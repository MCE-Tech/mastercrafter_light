/** @vitest-environment jsdom */
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"
import { MemoryRouter } from "react-router-dom";
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

// Mock the canonical data module to provide a deterministic small data set.
vi.mock("@/data/artistOverview", () => ({
  ARTISTS: [
    {
      id: 1,
      name: "Test Artist One",
      slug: "test-artist-one",
      image: "test1.jpg",
      tags: ["Tag1", "Tag2"],
      artistType: "Musician",
      score: 75,
    },
    {
      id: 2,
      name: "Test Artist Two",
      slug: "test-artist-two",
      image: "test2.jpg",
      tags: ["TagA"],
      artistType: "Band",
      score: 88,
    },
  ],
}));

describe("ArtistsSection component", () => {
  it("renders simplified home-page artist cards, row slides, and correct links", () => {
    render(
      <MemoryRouter>
        <ArtistsSection />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /discover our talents/i })).toBeInTheDocument();
    expect(screen.getByTestId("artists-row-carousel")).toBeInTheDocument();
    expect(screen.getAllByTestId("artist-row-slide")).toHaveLength(2);

    const links = screen.getAllByRole("link", { name: /view profile of/i });
    expect(links.length).toBeGreaterThanOrEqual(2);

    expect(screen.getAllByText("Test Artist One").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Musician").length).toBeGreaterThan(0);
    expect(screen.queryByText("Tag1")).not.toBeInTheDocument();
    expect(screen.queryByText("Craft Score")).not.toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /view profile of test artist one/i })[0]).toHaveAttribute(
      "href",
      "/artist/test-artist-one",
    );
  });
});