import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useAppSelector } from "../hooks";
import { DataSet } from "../features/data";

const Donut = ({ className }: { classNaeme?: string }) => {
  const allData = useAppSelector<DataSet>((state) => state.data);

  const data = [
    { name: "cheap", price: 0 },
    { name: "low", price: 0 },
    { name: "high", price: 0 },
    { name: "fancy", price: 0 },
  ];

  allData.map((item) => {
    switch (true) {
      case item.price < 25:
        data[0].price += 1;
        break;
      case item.price > 24 && item.price < 50:
        data[1].price += 1;
        break;
      case item.price > 49 && item.price < 75:
        data[2].price += 1;
        break;
      case item.price > 74:
        data[3].price += 1;
        break;
    }
  });

  const sector: number = Math.floor(360 / data.length);
  const colors: string[] = [];
  for (let i = 0; i < data.length; i++) {
    colors.push(`hsl(${i * sector}, 100%, 50%)`);
  }
  return (
    <ResponsiveContainer className={className} height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="price"
          outerRadius={150}
          innerRadius={100}
          fill="#000"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Donut;
