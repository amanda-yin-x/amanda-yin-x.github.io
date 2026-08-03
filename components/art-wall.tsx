"use client";

import Image from "next/image";
import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { artWallItems } from "@/lib/fun-stuff";
import styles from "./art-wall.module.css";

export function ArtWall() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className={styles.shell} aria-labelledby="art-wall-title">
      <div className={styles.legend}>
        <div>
          <p id="art-wall-title" className={styles.legendTitle}>
            The current wall
          </p>
          <p className={styles.legendMeta}>
            9 pieces · puzzles · watercolor · oil pastel
          </p>
        </div>
        <p className={styles.hint}>
          <RotateCcw aria-hidden className={styles.hintIcon} />
          Hover, press Enter, or tap to turn one over
        </p>
      </div>

      <div className={styles.wall}>
        {artWallItems.map((item, index) => {
          const active = activeId === item.id;
          const descriptionId = `${item.id}-description`;

          return (
            <button
              key={item.id}
              type="button"
              className={`${styles.tile} ${styles[item.area]}`}
              data-active={active}
              data-tone={item.tone}
              aria-pressed={active}
              aria-describedby={descriptionId}
              aria-label={`${item.title}. ${item.medium}. Turn this piece over.`}
              onClick={() => setActiveId(active ? null : item.id)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setActiveId(null);
                  event.currentTarget.blur();
                }
              }}
            >
              <span className={styles.inner}>
                <span className={styles.front} aria-hidden="true">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 94vw"
                    className={styles.image}
                    style={{ objectPosition: item.objectPosition }}
                    draggable={false}
                  />
                  <span className={styles.frontShade} />
                  <span className={styles.medium}>{item.medium}</span>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>

                <span className={styles.back} aria-hidden="true">
                  <span className={styles.backKicker}>{item.medium}</span>
                  <strong className={styles.backTitle}>{item.title}</strong>
                  <span className={styles.backNote}>{item.note}</span>
                  <span className={styles.backHint}>tap again to return</span>
                </span>
              </span>

              <span id={descriptionId} className="sr-only">
                {item.alt} {item.note}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
