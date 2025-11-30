import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

/**
 * Parse markdown content to React components with custom styling
 *
 * Supports:
 * - GitHub Flavored Markdown (tables, strikethrough, task lists)
 * - Standard markdown formatting
 * - Raw HTML rendering (from trusted database content)
 * - Custom Tailwind styling for all elements
 *
 * Note: HTML is rendered from trusted database content. Scripts are sanitized.
 *
 * @param content - Markdown/HTML string from database
 * @returns React component tree
 */
export function parseMarkdownToReact(
  content: string | null | undefined
): React.ReactNode {
  if (!content) return null;

  // Sanitize content: remove any script tags for security
  const sanitizedContent = content.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // Headings
        h1: ({ node, ...props }) => (
          <h1 className="text-2xl font-bold mb-4 text-primary" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2
            className="text-xl font-semibold mb-3 mt-6 text-primary"
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <h3
            className="text-lg font-semibold mb-2 mt-4 text-primary"
            {...props}
          />
        ),
        h4: ({ node, ...props }) => (
          <h4
            className="text-base font-semibold mb-2 mt-3 text-primary"
            {...props}
          />
        ),

        // Paragraphs and text
        p: ({ node, ...props }) => (
          <p className="mb-4 leading-relaxed text-foreground" {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong className="font-semibold text-primary" {...props} />
        ),
        em: ({ node, ...props }) => <em className="italic" {...props} />,

        // Lists
        ul: ({ node, ...props }) => (
          <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="text-foreground leading-relaxed" {...props} />
        ),

        // Code
        code: ({ node, inline, ...props }: any) =>
          inline ? (
            <code
              className="px-1.5 py-0.5 bg-tertiary rounded text-sm font-mono"
              {...props}
            />
          ) : (
            <code
              className="block p-4 bg-tertiary rounded-lg text-sm font-mono overflow-x-auto mb-4"
              {...props}
            />
          ),
        pre: ({ node, ...props }) => <pre className="mb-4" {...props} />,

        // Links
        a: ({ node, ...props }) => (
          <a
            className="text-secondary hover:text-secondary/80 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),

        // Blockquotes
        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-secondary pl-4 italic my-4 text-foreground/80"
            {...props}
          />
        ),

        // Tables
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto mb-4">
            <table
              className="min-w-full border border-border rounded-lg"
              {...props}
            />
          </div>
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-tertiary" {...props} />
        ),
        tbody: ({ node, ...props }) => (
          <tbody className="divide-y divide-border" {...props} />
        ),
        tr: ({ node, ...props }) => (
          <tr className="hover:bg-tertiary/50 transition-colors" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th
            className="px-4 py-2 text-left font-semibold text-primary"
            {...props}
          />
        ),
        td: ({ node, ...props }) => (
          <td className="px-4 py-2 text-foreground" {...props} />
        ),

        // Horizontal rule
        hr: ({ node, ...props }) => (
          <hr className="my-6 border-border" {...props} />
        ),
      }}
    >
      {sanitizedContent}
    </ReactMarkdown>
  );
}

/**
 * Simplified version for inline content (no block elements)
 * Use for short descriptions or inline text
 */
export function parseInlineMarkdown(
  content: string | null | undefined
): React.ReactNode {
  if (!content) return null;

  const sanitizedContent = content.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        p: ({ node, ...props }) => <span {...props} />, // Remove paragraph wrapper
        strong: ({ node, ...props }) => (
          <strong className="font-semibold" {...props} />
        ),
        em: ({ node, ...props }) => <em className="italic" {...props} />,
        code: ({ node, ...props }) => (
          <code
            className="px-1 py-0.5 bg-tertiary rounded text-sm font-mono"
            {...props}
          />
        ),
        a: ({ node, ...props }) => (
          <a
            className="text-secondary hover:text-secondary/80 underline"
            {...props}
          />
        ),
      }}
    >
      {sanitizedContent}
    </ReactMarkdown>
  );
}

/**
 * Check if content contains markdown/HTML formatting
 * Useful for conditional rendering
 */
export function hasMarkdownFormatting(
  content: string | null | undefined
): boolean {
  if (!content) return false;

  const markdownPatterns = [
    /\*\*.*?\*\*/, // Bold **text**
    /\*.*?\*/, // Italic *text*
    /__.*?__/, // Bold __text__
    /_.*?_/, // Italic _text_
    /^#{1,6}\s/m, // Headers # text
    /^\* /m, // Unordered lists
    /^\d+\. /m, // Ordered lists
    /<[^>]+>/, // HTML tags
    /\[.*?\]\(.*?\)/, // Links [text](url)
    /`.*?`/, // Inline code
  ];

  return markdownPatterns.some((pattern) => pattern.test(content));
}

/**
 * Strip all markdown/HTML formatting and return plain text
 * Useful for meta descriptions or previews
 */
export function stripMarkdown(content: string | null | undefined): string {
  if (!content) return "";

  return (
    content
      // Remove HTML tags
      .replace(/<[^>]*>/g, "")
      // Remove markdown headers
      .replace(/^#{1,6}\s+/gm, "")
      // Remove bold/italic
      .replace(/(\*\*|__)(.*?)\1/g, "$2")
      .replace(/(\*|_)(.*?)\1/g, "$2")
      // Remove links but keep text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, "")
      // Remove inline code
      .replace(/`([^`]+)`/g, "$1")
      // Remove extra whitespace
      .replace(/\s+/g, " ")
      .trim()
  );
}
