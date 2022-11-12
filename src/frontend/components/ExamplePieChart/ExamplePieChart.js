import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const COLORS = ["#3d70c7", "#c29203", "#ad3c2b"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const ExamplePieChart = ({ piechart }) => {
  const { title, values } = piechart;
  return (
    <div className="pie-chart flex--column">
      <PieChart width={190} height={180}>
        <Pie
          data={values}
          cx={90}
          cy={100}
          innerRadius={35}
          outerRadius={70}
          labelLine={false}
          label={renderCustomizedLabel}
          dataKey="value"
        >
          {values.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <p className="piechart__text">{title}</p>
    </div>
  );
};

export { ExamplePieChart };
