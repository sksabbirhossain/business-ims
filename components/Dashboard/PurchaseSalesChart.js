"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", Purchase: -120, Sale: 50 },
  { month: "Feb", Purchase: -200, Sale: 100 },
  { month: "Mar", Purchase: -250, Sale: 120 },
  { month: "Apr", Purchase: -150, Sale: 80 },
  { month: "May", Purchase: -180, Sale: 90 },
  { month: "Jun", Purchase: -170, Sale: 110 },
  { month: "Jul", Purchase: -210, Sale: 130 },
  { month: "Aug", Purchase: -250, Sale: 160 },
  { month: "Sep", Purchase: -240, Sale: 140 },
  { month: "Oct", Purchase: -190, Sale: 100 },
  { month: "Nov", Purchase: -220, Sale: 150 },
  { month: "Dec", Purchase: -280, Sale: 200 },
];

const CustomBar = ({ x, y, width, height, fill }) => {
  return (
    <rect
      x={x}
      y={height < 0 ? y + height : y}
      width={width}
      height={Math.abs(height)}
      fill={fill}
      rx={5}
      ry={5}
    />
  );
};

const PurchaseSalesChart = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={data}
      margin={{
        top: 20,
        right: 20,
        left: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="Sale" fill="#15B392" barSize={10} shape={<CustomBar />} />
      <Bar dataKey="Purchase" fill="#f87171" barSize={10} shape={<CustomBar />} />
    </BarChart>
  </ResponsiveContainer>
);

export default PurchaseSalesChart;
