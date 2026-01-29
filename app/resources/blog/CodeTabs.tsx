'use client';

import { useId, useMemo, useState } from 'react';

export type CodeBlock = {
  language?: string;
  caption?: string;
  code: string;
  label?: string;
};

type LanguageId = 'typescript' | 'python' | 'rust' | 'api';

const languageLabels: Record<string, string> = {
  bash: 'Shell',
  sh: 'Shell',
  http: 'HTTP',
  js: 'JavaScript',
  javascript: 'JavaScript',
  json: 'JSON',
  py: 'Python',
  python: 'Python',
  rs: 'Rust',
  rust: 'Rust',
  toml: 'TOML',
  ts: 'TypeScript',
  typescript: 'TypeScript',
  yaml: 'YAML',
  yml: 'YAML',
};

const getLabel = (block: CodeBlock, index: number) => {
  if (block.label) {
    return block.label;
  }
  if (block.language) {
    return languageLabels[block.language.toLowerCase()] ?? block.language.toUpperCase();
  }
  return `Code ${index + 1}`;
};

const resolveLanguageId = (language?: string): LanguageId | null => {
  if (!language) {
    return null;
  }
  const normalized = language.toLowerCase();
  if (['ts', 'typescript', 'js', 'javascript'].includes(normalized)) {
    return 'typescript';
  }
  if (['py', 'python'].includes(normalized)) {
    return 'python';
  }
  if (['rs', 'rust'].includes(normalized)) {
    return 'rust';
  }
  if (['http', 'bash', 'sh', 'json', 'yaml', 'yml', 'toml'].includes(normalized)) {
    return 'api';
  }
  return null;
};

type TokenPattern = {
  regex: RegExp;
  classes: string[];
};

const tokenPatterns: Record<LanguageId, TokenPattern> = {
  typescript: {
    regex:
      /(\/\/.*$)|(`[^`]*`|'[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*")|(\b0x[0-9a-fA-F]+\b|\b\d+(?:_\d+)*(?:\.\d+)?\b)|(\b(?:import|from|async|function|const|let|await|return|new|class|export|default|try|catch|throw|if|else|for|while)\b)|(\b(?:console|Math|Date|BigInt|Number|String|Boolean|Object|process|Promise)\b)/g,
    classes: ['comment', 'string', 'number', 'keyword', 'builtin'],
  },
  python: {
    regex:
      /(#.*$)|('''[^']*'''|"""[^"]*"""|'[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*")|(\b0x[0-9a-fA-F]+\b|\b\d+(?:_\d+)*(?:\.\d+)?\b)|(\b(?:import|from|async|def|await|return|class|try|except|raise|if|elif|else|for|while|with|as|in|None|True|False)\b)/g,
    classes: ['comment', 'string', 'number', 'keyword'],
  },
  rust: {
    regex:
      /(\/\/.*$)|(b?"[^"\\]*(?:\\.[^"\\]*)*"|b?'[^'\\]*(?:\\.[^'\\]*)*')|(\b0x[0-9a-fA-F_]+\b|\b\d+(?:_\d+)*(?:\.\d+)?\b)|(\b(?:use|let|mut|async|await|fn|pub|struct|impl|match|if|else|for|while|loop|return|crate|mod|enum|trait|Result|Ok|Err|Some|None)\b)|(\b\w+!)/g,
    classes: ['comment', 'string', 'number', 'keyword', 'macro'],
  },
  api: {
    regex:
      /(#.*$)|('[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*")|(\b\d+(?:\.\d+)?\b)|(\b(?:curl|POST|GET|PUT|PATCH|DELETE)\b)|(--?[A-Za-z-]+)|(\$[A-Z0-9_]+)\b/g,
    classes: ['comment', 'string', 'number', 'keyword', 'flag', 'variable'],
  },
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const highlightLine = (line: string, language: LanguageId) => {
  const pattern = tokenPatterns[language];
  let result = '';
  let lastIndex = 0;
  pattern.regex.lastIndex = 0;
  let match = pattern.regex.exec(line);
  while (match) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      result += escapeHtml(line.slice(lastIndex, index));
    }
    const groupIndex = match.slice(1).findIndex((group) => group !== undefined);
    const className = groupIndex >= 0 ? pattern.classes[groupIndex] : '';
    const tokenValue = escapeHtml(match[0]);
    result += className ? `<span class="code-token ${className}">${tokenValue}</span>` : tokenValue;
    lastIndex = index + match[0].length;
    match = pattern.regex.exec(line);
  }
  if (lastIndex < line.length) {
    result += escapeHtml(line.slice(lastIndex));
  }
  return result;
};

export default function CodeTabs({
  blocks,
  className,
}: {
  blocks: CodeBlock[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const activeBlock = blocks[activeIndex] ?? blocks[0];
  const languageId = resolveLanguageId(activeBlock?.language);

  const codeLines = useMemo(
    () => (activeBlock?.code ?? '').trimEnd().split('\n'),
    [activeBlock?.code],
  );
  const highlightedLines = useMemo(
    () =>
      codeLines.map((line) =>
        languageId ? highlightLine(line, languageId) : escapeHtml(line),
      ),
    [codeLines, languageId],
  );

  return (
    <div
      className={`rounded-xl border border-white/10 bg-[#050B1D] text-sm text-[#C8D7F2] ${
        className ?? ''
      }`}
    >
      {activeBlock?.caption && (
        <div className="px-4 pt-4 text-xs uppercase tracking-wide text-[#7BCBFF]">
          {activeBlock.caption}
        </div>
      )}
      <div
        role="tablist"
        aria-label="Code languages"
        className={`flex flex-wrap items-center gap-2 border-b border-white/10 bg-[#050B1D] px-3 py-2 ${
          activeBlock?.caption ? 'mt-3' : ''
        }`}
      >
        {blocks.map((block, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={`${baseId}-tab-${idx}`}
              id={`${baseId}-tab-${idx}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${idx}`}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                isActive
                  ? 'bg-white/15 text-[#F2F4F8] shadow-sm'
                  : 'text-[#9CB7E8] hover:text-[#E7F1FF]'
              }`}
            >
              {getLabel(block, idx)}
            </button>
          );
        })}
      </div>

      {blocks.map((block, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={`${baseId}-panel-${idx}`}
            id={`${baseId}-panel-${idx}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${idx}`}
            hidden={!isActive}
            className={!isActive ? 'hidden' : undefined}
          >
            <div className="bg-[#050B1D] p-4 sm:p-5">
              <div className="space-y-1 font-mono text-xs sm:text-sm leading-relaxed text-[#E7F1FF]">
                {codeLines.map((line, lineIndex) => (
                  <div
                    key={`${block.label ?? block.language ?? 'code'}-${lineIndex}`}
                    className="grid grid-cols-[2.2rem_1fr] gap-3"
                  >
                    <span className="select-none text-right text-[10px] text-[#6A7AA3] sm:text-xs">
                      {lineIndex + 1}
                    </span>
                    <span
                      className="whitespace-pre"
                      dangerouslySetInnerHTML={{ __html: highlightedLines[lineIndex] || ' ' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
