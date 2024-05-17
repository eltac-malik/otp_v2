import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";

import { Wrapper } from "@/components/Wrapper";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export const Statistics = () => {
  return (
    <Wrapper title="Statistika">
      <div className="flex items-center justify-start flex-wrap">
        <LineChart
          width={500}
          height={300}
          series={[
            { data: pData, label: "pv", id: "pvId" },
            { data: uData, label: "uv", id: "uvId" },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          sx={{
            ".MuiLineElement-root, .MuiMarkElement-root": {
              strokeWidth: 1,
            },
            ".MuiLineElement-series-pvId": {
              strokeDasharray: "5 5",
            },
            ".MuiLineElement-series-uvId": {
              strokeDasharray: "3 4 5 2",
            },
            ".MuiMarkElement-root:not(.MuiMarkElement-highlighted)": {
              fill: "#fff",
            },
            "& .MuiMarkElement-highlighted": {
              stroke: "none",
            },
          }}
        />

        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              area: true,
            },
          ]}
          width={500}
          height={300}
        />
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["group A", "group B", "group C"] },
          ]}
          series={[
            { data: [4, 3, 5] },
            { data: [1, 6, 3] },
            { data: [2, 5, 6] },
          ]}
          width={500}
          height={300}
        />
        <PieChart
          width={300}
          height={300}
          series={[
            {
              data: [
                { value: 10, color: "orange" },
                { value: 10, color: "blue" },
                { value: 10, color: "orange" },
              ],
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -90,
              endAngle: 180,
              cx: 150,
              cy: 150,
            },
          ]}
        />
      </div>
    </Wrapper>
  );
};
