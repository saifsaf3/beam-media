"use client";

import { track } from "@vercel/analytics";
import { useEffect, useState } from "react";

const palettes = [
  { id: "aurora", name: "Aurora" },
  { id: "orchid", name: "Orchid" },
  { id: "lagoon", name: "Lagoon" },
  { id: "sunset", name: "Sunset" },
] as const;
const storageKey = "beam-media-palette-v1";

type Palette = (typeof palettes)[number];

function applyPalette(palette: Palette) {
  document.documentElement.dataset.beamPalette = palette.id;
}

export function GradientSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const savedPalette = window.localStorage.getItem(storageKey);
        const savedIndex = palettes.findIndex((palette) => palette.id === savedPalette);

        if (savedIndex >= 0) {
          setActiveIndex(savedIndex);
          applyPalette(palettes[savedIndex]);
        }
      } catch {
        // The default Aurora palette remains active if storage is unavailable.
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function showNextPalette() {
    const nextIndex = (activeIndex + 1) % palettes.length;
    const nextPalette = palettes[nextIndex];

    setActiveIndex(nextIndex);
    applyPalette(nextPalette);

    try {
      window.localStorage.setItem(storageKey, nextPalette.id);
    } catch {
      // The colour switch still works for this visit without storage.
    }

    track("palette_change", { palette: nextPalette.name });
  }

  const activePalette = palettes[activeIndex];

  return (
    <button
      className="gradient-switcher"
      type="button"
      onClick={showNextPalette}
      aria-label={`Change website colours. Current palette: ${activePalette.name}.`}
      title="Change website colours"
    >
      <span className="gradient-switcher-swatch" aria-hidden="true" />
      <span className="gradient-switcher-copy">
        <small>Change colour</small>
        <strong aria-live="polite">{activePalette.name}</strong>
      </span>
      <span className="gradient-switcher-count" aria-hidden="true">
        {activeIndex + 1}/{palettes.length}
      </span>
    </button>
  );
}
