// import React, { useCallback, useState } from "react";
// import { PieChart, Pie, Sector } from "recharts";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "@material-tailwind/react";

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;

//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text
//         x={cx}
//         y={cy}
//         dy={-20}
//         textAnchor="middle"
//         className="text-lg font-semibold"
//       >
//         {payload.category}
//       </text>
//       <text x={cx} y={cy} dy={20} textAnchor="middle" className="text-gray-600">
//         ${value.toLocaleString()}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={payload.color}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={payload.color}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={payload.color}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={payload.color} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#374151"
//         className="text-sm"
//       >
//         {`$${value.toLocaleString()}`}
//       </text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#6B7280"
//         className="text-xs"
//       >
//         {`(${(percent * 100).toFixed(1)}%)`}
//       </text>
//     </g>
//   );
// };

// const BudgetPieChart = (budget) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const budgetData = [
//     { category: "Housing", value: 1200, color: "#3B82F6" },
//     { category: "Transportation", value: 400, color: "#10B981" },
//     { category: "Food & Dining", value: 600, color: "#F59E0B" },
//     { category: "Entertainment", value: 200, color: "#8B5CF6" },
//     { category: "Utilities", value: 300, color: "#EC4899" },
//   ];

//   const onPieEnter = useCallback((_, index) => {
//     setActiveIndex(index);
//   }, []);

//   const totalBudget = budgetData.reduce((sum, item) => sum + item.value, 0);

//   return (
//     <Card className="w-full max-w-2xl">
//       <CardHeader>
//         <CardTitle>Budget Distribution</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-col items-center">
//           <PieChart width={400} height={400}>
//             <Pie
//               activeIndex={activeIndex}
//               activeShape={renderActiveShape}
//               data={budgetData}
//               cx={200}
//               cy={200}
//               innerRadius={60}
//               outerRadius={80}
//               dataKey="value"
//               onMouseEnter={onPieEnter}
//             />
//           </PieChart>
//           <div className="grid grid-cols-2 gap-4 mt-4">
//             {budgetData.map((entry, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <div
//                   className="w-3 h-3 rounded-full"
//                   style={{ backgroundColor: entry.color }}
//                 />
//                 <span className="text-sm text-gray-600">
//                   {entry.category}: ${entry.value.toLocaleString()}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <div className="mt-4 text-center">
//             <p className="text-lg font-semibold">
//               Total Budget: ${totalBudget.toLocaleString()}
//             </p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default BudgetPieChart;
