
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function RepoGraph({ repos }) {
  // Props: repos = [{ name: 'A', number: 10 }, ...]
  console.log('RepoGraph repos:', repos);
  const data = Array.isArray(repos) ? repos.map((repo) => ({ name: repo.name, value: repo.id })) : [];

  return (
    <div
      className="p-4 rounded-2xl shadow-md w-full max-w-2xl mx-auto"
      style={{ background: '#161b22', minWidth: 600, minHeight: 400, paddingLeft: 64, paddingBottom: 48 }}
    >
      {data.length > 0 && (
        <h2 className="text-xl font-bold mb-4" style={{ color: '#c9d1d9' }}>Repo-ID Histogram</h2>
      )}
      <div style={{ width: '100%', height: 400, minWidth: 600, minHeight: 400, overflowX: 'auto' }}>
        {data.length > 0 ? (
          <ResponsiveContainer width={600} height={400}>
            <BarChart data={data} margin={{ top: 20, right: 20, left: 80, bottom: 120 }}>
              <XAxis dataKey="name" stroke="#c9d1d9" angle={-45} textAnchor="end" interval={0} />
              <YAxis stroke="#c9d1d9" />
              <Tooltip />
              <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#238636" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div style={{ color: '#c9d1d9', textAlign: 'center', paddingTop: '2rem' }}>
            No repository data to display.
          </div>
        )}
      </div>
    </div>
  );
}

export default RepoGraph;
