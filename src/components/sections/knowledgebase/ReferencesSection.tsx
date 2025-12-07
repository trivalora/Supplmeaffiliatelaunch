import { Reference } from "./types";

interface ReferencesSectionProps {
  references?: Reference[];
}

export function ReferencesSection({ references }: ReferencesSectionProps) {
  if (!references || references.length === 0) return null;

  return (
    <div
      className="bg-card border border-border rounded-[14px] p-8"
      itemScope
      itemType="https://schema.org/ScholarlyArticle"
    >
      <h2 className="text-primary mb-6">Key References</h2>
      <div className="space-y-4">
        {references.map((ref, index) => (
          <div
            key={index}
            id={`ref-${index + 1}`}
            className="pb-4 border-b border-border last:border-b-0 last:pb-0 transition-all duration-300"
            itemScope
            itemType="https://schema.org/ScholarlyArticle"
          >
            <p className="text-sm text-muted-foreground mb-1">
              <span className="font-medium">[{index + 1}]</span>{" "}
              <span itemProp="author">{ref.authors}</span> (
              <span itemProp="datePublished">{ref.year}</span>)
            </p>
            {ref.link ? (
              <a
                href={ref.link}
                target="_blank"
                rel="nofollow external noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5 group"
                itemProp="citation"
                data-citation-type="scholarly"
              >
                <p className="mb-1 group-hover:underline" itemProp="name">
                  {ref.title}
                </p>
                <svg
                  className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="External scholarly reference"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <p className="text-foreground mb-1" itemProp="name">
                {ref.title}
              </p>
            )}
            <p
              className="text-sm text-muted-foreground italic"
              itemProp="publisher"
            >
              {ref.journal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
