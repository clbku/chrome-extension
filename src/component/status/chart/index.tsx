import React, { Component } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "25/01",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "26/01",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "27/01",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "28/01",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "29/01",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "20/01",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "31/01",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class TimeChart extends Component {
  componentDidMount() {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
    });
  }
  render() {
    return (
      <ResponsiveContainer width={"100%"}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
