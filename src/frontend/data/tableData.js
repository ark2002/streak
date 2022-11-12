const tableInitialData = [
  {
    id: 1,
    name: "1000548 | Google Analytics Demo | ma...",
    ctr: { value: 45.34, bgColor: "#000000" },
    cpc: { value: 0.23, bgColor: "#000000" },
    cost: { value: 6.39, bgColor: "#000000" }
  },
  {
    id: 2,
    name: "1000548 | Google Analytics Demo | ma...",
    ctr: { value: 30.21, bgColor: "#000000" },
    cpc: { value: 0.43, bgColor: "#000000" },
    cost: { value: 11.23, bgColor: "#000000" }
  },
  {
    id: 3,
    name: "1000548 | Google Analytics Demo | ma...",
    ctr: { value: 26.51, bgColor: "#000000" },
    cpc: { value: 1.21, bgColor: "#000000" },
    cost: { value: 23.27, bgColor: "#000000" }
  },
  {
    id: 4,
    name: "1000548 | Google Analytics Demo | ma...",
    ctr: { value: 24.31, bgColor: "#000000" },
    cpc: { value: 0.78, bgColor: "#000000" },
    cost: { value: 0, bgColor: "#000000" }
  },
  {
    id: 5,
    name: "1000548 | Google Analytics Demo | ma...",
    ctr: { value: 20.18, bgColor: "#000000" },
    cpc: { value: 1.06, bgColor: "#000000" },
    cost: { value: 7.59, bgColor: "#000000" }
  }
];

const ctrColor = (value) => {
  if (value > 45) return "#3894f0";
  else if (45 > value && value > 40) return "#2b7ccc";
  else if (40 > value && value > 30) return "#2569ac";
  else if (30 > value && value > 20) return "#1b4c7d";
  else if (20 > value && value > 10) return "#14395d";
  else if (10 > value && value > 0) return "#000000";
  else return "#000000";
};

const cpcColor = (value) => {
  if (value > 1) return "#00bf1e";
  else if (1 > value && value > 0.8) return "#009f19";
  else if (0.8 > value && value > 0.6) return "#008815";
  else if (0.6 > value && value > 0.4) return "#006f11";
  else if (0.4 > value && value > 0.2) return "#00530d";
  else if (0.2 > value && value > 0) return "#003809";
  else return "#000000";
};

const costColor = (value) => {
  if (value > 20) return "#ffd800";
  else if (20 > value && value > 10) return "#d1b100";
  else if (10 > value && value > 8) return "#a88f00";
  else if (8 > value && value > 7) return "#837000";
  else if (7 > value && value > 5) return "#665700";
  else if (5 > value && value > 0) return "#423900";
  else return "#000000";
};

export const tableFinalData = tableInitialData.map((item) => {
  return {
    ...item,
    ctr: { ...item.ctr, bgColor: ctrColor(item.ctr.value) },
    cpc: { ...item.cpc, bgColor: cpcColor(item.cpc.value) },
    cost: { ...item.cost, bgColor: costColor(item.cost.value) }
  };
});
