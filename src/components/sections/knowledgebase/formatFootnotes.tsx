import { ReactNode, Fragment } from "react";
import { FootnotePopup } from "./FootnotePopup";
import { Reference } from "./types";

export function formatFootnotes(
  content: ReactNode[] | string,
  references?: Reference[]
): ReactNode {
  // Helper function to convert a footnote string to hover cards
  const convertFootnoteToPopup = (
    footnoteStr: string,
    keyPrefix: string | number
  ) => {
    // Extract individual footnote numbers: "[1][4][7]" -> ["1", "4", "7"]
    const numbers = footnoteStr.match(/\d+/g) || [];

    return numbers.map((num, idx) => {
      const refIndex = parseInt(num) - 1;
      const reference = references?.[refIndex];

      return (
        <Fragment key={`${keyPrefix}-${idx}`}>
          <FootnotePopup refNumber={num} reference={reference} />
        </Fragment>
      );
    });
  };

  // If it's already an array (from autolinkGlossaryTerms), process each element
  if (Array.isArray(content)) {
    return content.map((node, index) => {
      if (typeof node === "string") {
        // Process string parts for footnotes
        const parts = node.split(/(\[\d+\](?:\[\d+\])*)/g);
        return parts.map((part, partIndex) => {
          if (/^\[\d+\](?:\[\d+\])*$/.test(part)) {
            return (
              <sup key={`${index}-${partIndex}`}>
                {convertFootnoteToPopup(part, `${index}-${partIndex}`)}
              </sup>
            );
          }
          return <Fragment key={`${index}-${partIndex}`}>{part}</Fragment>;
        });
      }
      // Return non-string nodes as-is (e.g., glossary links)
      return node;
    });
  }

  // If it's a string, split by footnote references
  const parts = content.split(/(\[\d+\](?:\[\d+\])*)/g);

  return parts.map((part, index) => {
    // Check if this part is a footnote reference
    if (/^\[\d+\](?:\[\d+\])*$/.test(part)) {
      return <sup key={index}>{convertFootnoteToPopup(part, index)}</sup>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}
