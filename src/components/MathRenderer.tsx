import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
  block?: boolean;
}

/**
 * Component that parses and renders LaTeX math formulas using KaTeX.
 * Supports inline math $...$ and display math $$...$$
 */
export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '', block = false }) => {
  const renderedContent = useMemo(() => {
    if (!content) return '';

    // If whole string is a math formula
    if (content.startsWith('$$') && content.endsWith('$$')) {
      const math = content.slice(2, -2).trim();
      try {
        return katex.renderToString(math, { displayMode: true, throwOnError: false });
      } catch {
        return content;
      }
    }

    if (content.startsWith('$') && content.endsWith('$') && !content.slice(1, -1).includes('$')) {
      const math = content.slice(1, -1).trim();
      try {
        return katex.renderToString(math, { displayMode: block, throwOnError: false });
      } catch {
        return content;
      }
    }

    // Split text by $$...$$ (block) and $...$ (inline)
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g;
    const parts = content.split(regex);

    return parts
      .map((part) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const math = part.slice(2, -2).trim();
          try {
            return katex.renderToString(math, { displayMode: true, throwOnError: false });
          } catch {
            return part;
          }
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1).trim();
          try {
            return katex.renderToString(math, { displayMode: false, throwOnError: false });
          } catch {
            return part;
          }
        }
        // Escape standard HTML tags in normal text to prevent XSS while allowing linebreaks
        return part.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>');
      })
      .join('');
  }, [content, block]);

  return (
    <span
      className={`katex-content ${block ? 'block my-3' : 'inline'} ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
};

export default MathRenderer;
