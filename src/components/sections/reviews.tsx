"use client";
import { SectionHeading } from "@/src/components/layout/section-heading";
import { useCurrentBarber } from "@/src/contexts/BarberContext";

function stars(rating: number): string {
  return "*".repeat(rating);
}

export function ReviewsSection() {
  const barberConfig = useCurrentBarber();
  const [firstReview, ...otherReviews] = barberConfig.reviews;

  return (
    <section>
      <div className="section-shell py-12 md:py-24">
        <SectionHeading
          kicker="Avis"
          title="Ce que disent les clients"
          subtitle="Des retours réels, visibles en ligne, qui rassurent avant la première réservation."
          align="split"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-12">
          {firstReview ? (
            <figure
              key={`${firstReview.author}-${firstReview.source}`}
              className="border border-[var(--accent)]/40 bg-[linear-gradient(145deg,rgba(var(--accent-rgb),0.12),rgba(24,24,27,0.45))] p-8 md:col-span-7"
            >
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--accent)]">
                {stars(firstReview.rating)}
              </p>
              <blockquote className="mt-5 font-display text-3xl uppercase leading-[0.95] text-zinc-100 md:text-5xl">
                &quot;{firstReview.text}&quot;
              </blockquote>
              <figcaption className="mt-8 text-[11px] uppercase tracking-[0.18em] text-zinc-300">
                {firstReview.author} - {firstReview.source}
              </figcaption>
            </figure>
          ) : null}

          <div className="grid gap-4 md:col-span-5">
            {otherReviews.map((review) => (
              <figure
                key={`${review.author}-${review.source}`}
                className="border border-zinc-800 bg-zinc-950/70 p-6"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-[var(--accent)]">
                  {stars(review.rating)}
                </p>
                <blockquote className="mt-4 text-sm leading-relaxed text-zinc-200">
                  &quot;{review.text}&quot;
                </blockquote>
                <figcaption className="mt-6 text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                  {review.author} - {review.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
