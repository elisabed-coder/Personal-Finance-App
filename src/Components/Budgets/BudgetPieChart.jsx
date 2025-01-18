import { ResponsivePie } from "@nivo/pie";
import { useBudget } from "../Context/BudgetContext";
import { Card } from "@material-tailwind/react";

const MyResponsivePie = () => {
  const { budgets, loading } = useBudget();

  // Add safety check for budgets
  if (!budgets || budgets.length === 0) {
    return (
      <div className="h-96 w-full flex items-center justify-center">
        <p>No budget data available</p>
      </div>
    );
  }

  // Combine duplicate categories by summing their maximum_spend values
  const combinedData = budgets.reduce((acc, budget) => {
    // Add null check for budget object
    if (!budget || !budget.category) return acc;

    const existingCategory = acc.find(
      (item) => item.category === budget.category
    );

    if (existingCategory) {
      existingCategory.maximum_spend += parseFloat(budget.maximum_spend || 0);
    } else {
      acc.push({
        category: budget.category,
        maximum_spend: parseFloat(budget.maximum_spend || 0),
        theme_color: budget.theme_color, // Assign theme_color here
      });
    }
    return acc;
  }, []);

  // Transform combined data into the format required by ResponsivePie
  const pieData = combinedData
    .map((budget) => ({
      id: budget.category,
      value: budget.maximum_spend,
      color: budget.theme_color, // Use theme_color for pie slice color
      label: budget.category,
    }))
    .filter((item) => item.value > 0); // Filter out zero values

  const totalSum = pieData.reduce((sum, item) => sum + item.value, 0);

  // Return early if no valid data
  if (pieData.length === 0) {
    return (
      <div className="h-96 w-full flex items-center justify-center">
        <p>No valid budget data to display</p>
      </div>
    );
  }

  const CenteredMetric = ({ centerX, centerY }) => (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: 24,
        fontWeight: "bold",
        fill: "#333",
      }}
    >
      {totalSum}
    </text>
  );

  return (
    // <div className="h-96 w-full md:w-5/6 mx-40">
    <Card className="h-96 backdrop-brightness-200 md:w-5/6">
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <p>Loading...</p>
        </div>
      ) : (
        <ResponsivePie
          data={pieData}
          margin={{ top: 40, right: 80, bottom: 150, left: 80 }}
          startAngle={-54}
          innerRadius={0.8}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          layers={[
            "arcs",
            "arcLabels",
            "arcLinkLabels",
            "legends",
            CenteredMetric,
          ]}
          colors={({ data }) => data.color}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          legends={[
            {
              anchor: "bottom",
              direction: "column",
              translateY: 125,
              itemWidth: 100,
              itemHeight: 20,
              itemTextColor: "#999",
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      )}
    </Card>
    //{" "}
    // </div>
  );
};

export default MyResponsivePie;
