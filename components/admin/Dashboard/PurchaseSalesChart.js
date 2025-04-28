/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

"use client";
import { getPurchaseAndSales } from "@/actions/storeAdmin/dashboard/dashboardActions";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// const data = [
//   { month: "Jan", Purchase: -1203, Sale: 503 },
//   { month: "Feb", Purchase: -2003, Sale: 1003 },
//   { month: "Mar", Purchase: -2503, Sale: 1203 },
//   { month: "Apr", Purchase: -1503, Sale: 803 },
//   { month: "May", Purchase: -1830, Sale: 903 },
//   { month: "Jun", Purchase: -1703, Sale: 1130 },
//   { month: "Jul", Purchase: -2130, Sale: 1330 },
//   { month: "Aug", Purchase: -2530, Sale: 1603 },
//   { month: "Sep", Purchase: -2430, Sale: 1430 },
//   { month: "Oct", Purchase: -1930, Sale: 100 },
//   { month: "Nov", Purchase: -2230, Sale: 1530 },
//   { month: "Dec", Purchase: -2830, Sale: 700 },
// ];

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

const PurchaseSalesChart = ({ data }) => {
  data = data
    ?.map((item) => ({
      ...item,
      createdAt: new Date(item.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
      }), // Format as "12 Mar"
      Purchase: -item.Purchase,
    }))
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  return (
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
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="Sale" fill="#15B392" barSize={10} shape={<CustomBar />} />
        <Bar
          dataKey="Purchase"
          fill="#f87171"
          barSize={10}
          shape={<CustomBar />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PurchaseSalesChart;
