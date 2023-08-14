import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { DonutSTL } from "../styled/Donut.styled";

export const Donut: React.FC = () => {
  const data = [
    { name: "first", value: 50 },
    { name: "second", value: 40 },
    { name: "third", value: 30 },
    { name: "fourth", value: 60 },
  ];

  const sector: number = Math.floor(360 / data.length);
  const colors: string[] = [];

  for (let i = 0; i < data.length; i++) {
    colors.push(`hsl(${i * sector}, 80%, 50%)`);
  }
  console.log(colors);

  return (
    <DonutSTL>
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={150}
          innerRadius={100}
          fill="#fff"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </DonutSTL>
  );
};
