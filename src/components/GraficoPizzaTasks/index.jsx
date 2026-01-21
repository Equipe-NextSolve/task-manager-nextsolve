import { ResponsivePie } from "@nivo/pie";

export default function GraficoPizzaTasks() {
  const data = [
    {
      id: "Concluídos",
      label: "Concluídos",
      value: 1,
      color: "#00D492",
    },
    {
      id: "Atrasados",
      label: "Atrasados",
      value: 1,
      color: "#FF6467",
    },
    {
      id: "Em andamento",
      label: "Em andamento",
      value: 2,
      color: "#00D3F2",
    },
  ];

  return (
    <div className="flex-1 flex items-center justify-around min-h-[500px]">
      <div className="w-full h-full">
        <ResponsivePie
          data={data}
          margin={{ top: 75, right: 75, bottom: 75, left: 75 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={5}
          // activeInnerRadiusOffset={5}
          borderWidth={1}
          enableArcLinkLabels={true}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#e2e8f0" // Mudei para ficar visível no dark
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          colors={{ datum: "data.color" }}
          legends={[
            {
              anchor: "bottom",
              itemTextColor: "#e2e8f0",
              direction: "row",
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              symbolShape: "circle",
            },
          ]}
          theme={{
            labels: {
              text: {
                fontSize: 14,
                fontWeight: "bold",
                color: "#0F172B",
              },
            },
            tooltip: {
              container: {
                background: "#0F172B",
                color: "#e2e8f0",
                fontSize: "14px",
                borderRadius: "8px",
                boxShadow: "0px 0px 4px 1px #e2e8f0",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
