import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const ExampleLineGraph = ({ graph }) => {
  const data = graph;

  return (
    <LineChart
      width={400}
      height={180}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 2,
        bottom: 5
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

export { ExampleLineGraph };
