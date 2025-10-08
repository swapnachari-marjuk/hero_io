import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BarComponents = ({ ratings }) => {
  return (
    <div className="py-10">
      <div style={{ maxWidth: "100%", height: 350 }}>
        <h2 className="text-xl font-semibold mb-3 text-center">User Ratings</h2>
        <ResponsiveContainer>
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 20, right: 40, left: 60, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" barSize={15} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarComponents;
