import React from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
const data = [
  {
    name: "1 Dec",
    uv: 20,
  },
  {
    name: "8 Dec",
    uv: 50,
  },
  {
    name: "16 Dec",
    uv: 30,
  },
  {
    name: "31 Dec",
    uv: 50,
  },
];

const ChartArea = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="70%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#109CF1"
            fill="#109CF1"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartArea;
