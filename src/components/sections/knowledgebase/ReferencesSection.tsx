import { Reference } from './types';

interface ReferencesSectionProps {
  references?: Reference[];
}

export function ReferencesSection({ references }: ReferencesSectionProps) {
  if (!references || references.length === 0) return null;

  return (
    <div className="bg-card border border-border rounded-[14px] p-8">
      <h2 className="text-primary mb-6">Key References</h2>
      <div className="space-y-4">
        {references.map((ref, index) => (
          <div
            key={index}
            id={`ref-${index + 1}`}
            className="pb-4 border-b border-border last:border-b-0 last:pb-0 transition-all duration-300"
          >
            <p className="text-sm text-muted-foreground mb-1">
              <span className="font-medium">[{index + 1}]</span> {ref.authors} ({ref.year})
            </p>
            {ref.link ? (
              <a
                href={ref.link}
                target="_blank"
                rel="nofollow noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <p className="mb-1 hover:underline">{ref.title}</p>
              </a>
            ) : (
              <p className="text-foreground mb-1">{ref.title}</p>
            )}
            <p className="text-sm text-muted-foreground italic">
              {ref.journal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
