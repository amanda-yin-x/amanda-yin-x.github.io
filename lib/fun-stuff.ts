export type ArtWallItem = {
  id: string;
  area: "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i";
  src: string;
  alt: string;
  title: string;
  medium: string;
  note: string;
  tone: "rose" | "blue" | "green" | "amber" | "violet";
  objectPosition?: string;
};

export const artWallItems: ArtWallItem[] = [
  {
    id: "desk-gallery",
    area: "a",
    src: "/art/watercolor-desk-gallery.jpg",
    alt: "Small watercolor paintings arranged across a desk beneath a pink keyboard.",
    title: "Tiny gallery, temporary lease",
    medium: "Watercolor studies",
    note: "My desk, briefly promoted to tiny art gallery.",
    tone: "rose",
    objectPosition: "center 46%"
  },
  {
    id: "lobster-puzzle",
    area: "b",
    src: "/art/puzzle-lobster-in-progress.jpg",
    alt: "An in-progress New Yorker lobster jigsaw puzzle spread across felt sorting trays.",
    title: "The lobster negotiation",
    medium: "Jigsaw · in progress",
    note: "A completely reasonable number of sorting trays.",
    tone: "blue",
    objectPosition: "center 46%"
  },
  {
    id: "mountain-lake",
    area: "c",
    src: "/art/watercolor-mountain-lake.jpg",
    alt: "A hand holds a watercolor painting of a mountain lake and pine forest.",
    title: "Lake with supporting birds",
    medium: "Watercolor & ink",
    note: "A mountain lake, plus a few tiny birds for drama.",
    tone: "green",
    objectPosition: "center 38%"
  },
  {
    id: "fireworks",
    area: "d",
    src: "/art/oil-pastel-fireworks.jpg",
    alt: "An energetic firework-like floral painting against a cobalt-blue background.",
    title: "Committed to the bit",
    medium: "Oil pastel",
    note: "Flowers? Fireworks? Either way, fully committed.",
    tone: "amber",
    objectPosition: "center 35%"
  },
  {
    id: "coral-blooms",
    area: "e",
    src: "/art/watercolor-coral-blooms.jpg",
    alt: "An abstract watercolor of coral blooms, blue washes, and scattered paint splashes.",
    title: "Extroverted watercolor",
    medium: "Watercolor",
    note: "The paint decided personal space was optional.",
    tone: "rose",
    objectPosition: "center 45%"
  },
  {
    id: "cliff",
    area: "f",
    src: "/art/oil-pastel-cliff.jpg",
    alt: "A tiny figure stands on a bright green cliff above a deep blue sea.",
    title: "A very large think",
    medium: "Oil pastel",
    note: "One tiny person, one neon cliff, several important thoughts.",
    tone: "green",
    objectPosition: "center 42%"
  },
  {
    id: "cozy-kitchen",
    area: "g",
    src: "/art/puzzle-cozy-kitchen.jpg",
    alt: "A completed illustrated puzzle of cats sharing cakes and tea in a cozy kitchen.",
    title: "Peak hosting",
    medium: "Jigsaw · completed",
    note: "Cake, cats, and absolutely no visible cleanup.",
    tone: "amber",
    objectPosition: "center 48%"
  },
  {
    id: "alice-puzzle",
    area: "h",
    src: "/art/puzzle-alice-moodboard.jpg",
    alt: "An Alice in Wonderland jigsaw puzzle set up in front of a screen of visual references.",
    title: "Research, technically",
    medium: "Jigsaw · in progress",
    note: "When the puzzle needs its own mood board.",
    tone: "violet",
    objectPosition: "center 45%"
  },
  {
    id: "puzzle-wall",
    area: "i",
    src: "/art/puzzle-gallery-wall.jpg",
    alt: "Completed and framed jigsaw puzzles arranged together across a rug.",
    title: "Strict admissions policy",
    medium: "Puzzle collection",
    note: "To join the gallery wall, please arrive in pieces.",
    tone: "blue",
    objectPosition: "center 48%"
  }
];
