import { ResponsivePie } from "@nivo/pie";
import { useBudget } from "../Context/BudgetContext";

const MyResponsivePie = () => {
  const { budgets } = useBudget();

  // Combine duplicate categories by summing their maximum_spend values
  const combinedData = budgets.reduce((acc, budget) => {
    const existingCategory = acc.find(
      (item) => item.category === budget.category
    );

    if (existingCategory) {
      existingCategory.maximum_spend += parseFloat(budget.maximum_spend);
    } else {
      acc.push({
        category: budget.category,
        maximum_spend: parseFloat(budget.maximum_spend),
        theme_color: budget.theme_color,
      });
    }
    return acc;
  }, []);

  const pieData = combinedData.map((budget) => ({
    id: budget.category,
    value: budget.maximum_spend,
    color: budget.theme_color,
    label: budget.category,
  }));

  return (
    <div className="h-96 w-full">
      <ResponsivePie
        data={pieData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
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
    </div>
  );
};

export default MyResponsivePie;
