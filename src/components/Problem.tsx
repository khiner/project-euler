import { lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';

interface Params {
  problemNumber: string;
}

export default function Problem() {
  const { problemNumber } = useParams<Params>();
  const problemHtml = require(`../../problem_descriptions/Problem${problemNumber}.html`);
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
        <Suspense fallback={<div>Loading...</div>}>
          <SolutionComponent />
        </Suspense>
      </div>
    </div>
  );
}
