"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";

HC_more(Highcharts);
HC_exporting(Highcharts);

const options: Highcharts.Options = {
  colors: ["#7CC7E8", "#01579B"],
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
    text: "월별 통계",
    style: {
      fontWeight: "semibold",
    },
  },
  xAxis: {
    categories: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
  },
  yAxis: {
    title: {
      text: "방문자 수",
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
      data: [16, 18, 16, 20, 18, 25, 30, 23, 34, 25, 27, 20],
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
