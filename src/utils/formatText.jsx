import React from 'react';

/**
 * Utility to render formatted text supporting **bold** markers and (parenthesis) names with clean colored text
 */
export function renderFormattedText(text) {
  if (!text) return null;
  if (typeof text !== 'string') return text;

  // Split by markdown bold markers **text** or parenthesis (text)
  const parts = text.split(/(\*\*.*?\*\*|\(.*?\))/g);

  return parts.map((part, idx) => {
    // Markdown bold **text**
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-extrabold text-amber-300 underline decoration-amber-500/40 underline-offset-2">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Parenthesis (Lake or Gulf name highlight - pure colored text, no box/border/padding)
    if (part.startsWith('(') && part.endsWith(')')) {
      const content = part.slice(1, -1);
      return (
        <span key={idx} className="font-bold text-cyan-300 ml-0.5">
          ({content})
        </span>
      );
    }

    return part;
  });
}
