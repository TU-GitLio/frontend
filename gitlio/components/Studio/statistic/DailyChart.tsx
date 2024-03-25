"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";

HC_more(Highcharts);
HC_exporting(Highcharts);

const options: Highcharts.Options = {
  colors: ["#01579B"],
  chart: {
    type: "line",
    borderRadius: 12,
    width: 660,
    height: 430,
    backgroundColor: "rgb(255, 255, 255, 0.8)",
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  title: {
    text: "일별 통계",
    style: {
      fontWeight: "semibold",
    },
  },
  xAxis: {
    categories: [
      "2/21",
      "2/22",
      "2/23",
      "2/24",
      "2/25",
      "2/26",
      "2/27",
      "2/28",
      "2/29",
      "3/1",
      "3/2",
      "3/3",
    ],
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: false,
    },
  },
  series: [
    {
      type: "line",
      name: "조회수",
      data: [5, 10, 7, 7, 8, 5, 12, 9, 14, 15, 7, 13],
    },
  ],
};

const BarChart: React.FC = () => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
