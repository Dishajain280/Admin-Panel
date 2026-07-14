import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsArrowUpShort,
  BsArrowDownShort,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

function Home() {
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2216 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  // Custom glassmorphic tooltip for charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "12px 16px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
          }}
        >
          <p style={{ margin: 0, fontWeight: 700, fontSize: "0.85rem", color: "#f8fafc", marginBottom: "6px" }}>{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ margin: 0, fontSize: "0.85rem", color: entry.color || entry.fill, display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: entry.color || entry.fill }}></span>
              {entry.name}: <strong style={{ color: "#fff" }}>{entry.value}</strong>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>NEXUS DASHBOARD</h3>
      </div>
      
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="card-icon" />
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <h1>300</h1>
            <span style={{ color: "#10b981", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center" }}>
              <BsArrowUpShort /> +12%
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="card-icon" />
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <h1>12</h1>
            <span style={{ color: "#94a3b8", fontSize: "0.85rem", fontWeight: 600 }}>
              Active
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className="card-icon" />
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <h1>33</h1>
            <span style={{ color: "#10b981", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center" }}>
              <BsArrowUpShort /> +8.4%
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card-icon" style={{ color: "#ef4444", background: "rgba(239, 68, 68, 0.1)" }} />
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
            <h1>42</h1>
            <span style={{ color: "#ef4444", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center" }}>
              <BsArrowDownShort /> -2%
            </span>
          </div>
        </div>
      </div>

      <div className="charts">
        <div>
          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "20px", color: "#f8fafc", paddingLeft: "10px" }}>
            REVENUE VS EXPENSES
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="barUvGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c084fc" stopOpacity={1} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="barPvGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity={1} />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
              <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} style={{ fontSize: "0.75rem" }} />
              <YAxis stroke="#94a3b8" tickLine={false} style={{ fontSize: "0.75rem" }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: "0.8rem", paddingTop: "10px" }} />
              <Bar
                name="Revenue"
                dataKey="pv"
                fill="url(#barPvGrad)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                name="Expenses"
                dataKey="uv"
                fill="url(#barUvGrad)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "20px", color: "#f8fafc", paddingLeft: "10px" }}>
            GROWTH OVERVIEW
          </h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
              <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} style={{ fontSize: "0.75rem" }} />
              <YAxis stroke="#94a3b8" tickLine={false} style={{ fontSize: "0.75rem" }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: "0.8rem", paddingTop: "10px" }} />
              <Line
                name="Sales"
                type="monotone"
                dataKey="pv"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ stroke: "#6366f1", strokeWidth: 2, r: 4, fill: "#090d16" }}
                activeDot={{ r: 6, strokeWidth: 0, fill: "#a855f7" }}
              />
              <Line
                name="Visitors"
                type="monotone"
                dataKey="uv"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ stroke: "#10b981", strokeWidth: 2, r: 4, fill: "#090d16" }}
                activeDot={{ r: 6, strokeWidth: 0, fill: "#34d399" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Home;
