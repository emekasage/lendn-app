import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.css";

export default function Chart() {
  const data = [
    {
      name: "Jan",
      uv: 50,
    },
    {
      name: "Feb",
      uv: 175,
    },
    {
      name: "Mar",
      uv: 50,
    },
    {
      name: "Apr",
      uv: 300,
    },
    {
      name: "May",
      uv: 75,
    },
    {
      name: "Jun",
      uv: 150,
    },
    {
      name: "Jul",
      uv: 200,
    },
  ];

  return (
    <ResponsiveContainer width="100%" aspect={4 / 1.5}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#979797" />
        <YAxis />
        <Line type="monotone" dataKey="uv" stroke="#E41613" />
        <CartesianGrid stroke="#EFF3F9" strokeDasharray="5 5" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
