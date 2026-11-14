import type { Dictionary } from "@/lib/i18n";
import { VIDEO_URLS, toYouTubeEmbedUrl } from "@/lib/videos";

export default function Videos({ dict }: { dict: Dictionary["videos"] }) {
  const productEmbed = toYouTubeEmbedUrl(VIDEO_URLS.aboutProduct);
  const teamEmbed = toYouTubeEmbedUrl(VIDEO_URLS.aboutTeam);

  const items = [
    productEmbed
      ? {
          key: "about-product",
          embedUrl: productEmbed,
          badge: dict.aboutProduct.badge,
          title: dict.aboutProduct.title,
          description: dict.aboutProduct.description,
          color: "var(--color-primary)",
        }
      : null,
    teamEmbed
      ? {
          key: "about-team",
          embedUrl: teamEmbed,
          badge: dict.aboutTeam.badge,
          title: dict.aboutTeam.title,
          description: dict.aboutTeam.description,
          color: "var(--color-accent)",
        }
      : null,
  ].filter((item): item is NonNullable<typeof item> => item !== null);

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      id="videos"
      aria-labelledby="videos-heading"
      className="py-[var(--space-8)] md:py-[var(--space-10)] bg-surface border-t border-surface-variant"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)]">
        <div className="mb-[var(--space-8)]">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.12em] mb-[var(--space-4)]">
            {dict.eyebrow}
          </p>
          <h2
            id="videos-heading"
            className="font-display font-bold text-on-surface leading-[1.08] max-w-lg"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            {dict.title}
            <br />
            <span className="text-on-surface-variant">{dict.titleMuted}</span>
          </h2>
          <p className="text-on-surface-variant text-sm mt-[var(--space-3)] max-w-lg">
            {dict.body}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 ${
            items.length > 1 ? "md:grid-cols-2" : "max-w-3xl"
          } gap-[var(--space-5)]`}
        >
          {items.map((video) => (
            <article
              key={video.key}
              className="feature-card bg-background border border-surface-variant p-[var(--space-5)] flex flex-col"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <div className="mb-[var(--space-4)]">
                <span
                  className="text-xs font-semibold px-[var(--space-2)] py-[var(--space-1)]"
                  style={{
                    color: video.color,
                    backgroundColor: `color-mix(in srgb, ${video.color} 12%, transparent)`,
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  {video.badge}
                </span>
              </div>

              <h3 className="font-display font-semibold text-[20px] text-on-surface mb-[var(--space-2)]">
                {video.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-[var(--space-5)]">
                {video.description}
              </p>

              <div
                className="relative w-full overflow-hidden bg-inverse-surface mt-auto"
                style={{
                  aspectRatio: "16 / 9",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
