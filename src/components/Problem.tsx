import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Params {
  problemNumber: string;
}

export default function Problem() {
  const { problemNumber } = useParams<Params>();
  const problemHtml = require(`../../problem_descriptions/Problem${problemNumber}.html`);
  const solutionCode = require(`!raw-loader!./solutions/Solution${problemNumber}`).default.toString().trim();
  const SolutionComponent = lazy(() => import(`./solutions/Solution${problemNumber}`));

  return (
    <div className="Problem">
      <div style={{ fontWeight: 'bold', fontSize: 24, marginBottom: '1em' }}>
        <a href={`https://projecteuler.net/problem=${problemNumber}`} target="_blank" rel="noreferrer">
          Problem {problemNumber}
        </a>
      </div>
      <div style={{ marginBottom: '1.5em' }}></div>
      <div
        className="Description"
        style={{ padding: 10, borderRadius: 8, border: '1px solid #d3adf7', background: '#efdbff' }}
      >
        <div style={{ fontWeight: 'bold', fontSize: 20, marginBottom: '1em' }}>Description</div>
        <div dangerouslySetInnerHTML={{ __html: problemHtml }}></div>
      </div>
      <div
        className="Solution"
        style={{
          marginTop: '1.5em',
          padding: 10,
          borderRadius: 8,
          border: '1px solid #95de64',
          background: '#f6ffed',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: 20, marginBottom: '1em' }}>Solution</div>
        <SyntaxHighlighter language="tsx" style={vscDarkPlus} customStyle={{ borderRadius: 8 }}>
          {solutionCode}
        </SyntaxHighlighter>
        <div style={{ fontWeight: 'bold', fontSize: 16, margin: '1.5em 0 1em 0' }}>Output:</div>
        <code>
          <Suspense fallback={<div>Loading solution...</div>}>
            <SolutionComponent />
          </Suspense>
        </code>
      </div>
    </div>
  );
}
