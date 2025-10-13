'use client';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rust from 'react-syntax-highlighter/dist/esm/languages/prism/rust';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import toml from 'react-syntax-highlighter/dist/esm/languages/prism/toml';

SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('toml', toml);

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
};

export default function CodeBlock({
  code,
  language = 'rust',
  className = 'p-4',
}: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      PreTag="div"
      codeTagProps={{ className: 'font-mono text-sm' }}
      customStyle={{ margin: 0, borderRadius: '0.75rem', overflowX: 'auto' }}
      className={`rounded-lg ${className}`}
    >
      {code}
    </SyntaxHighlighter>
  );
}
