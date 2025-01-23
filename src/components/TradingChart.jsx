// TradingChart.js
import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const TradingChart = ({ data }) => {
  const chartContainerRef = useRef(null);

  const intervalColors = {
    '1D': '#2962FF',
    '1W': 'rgb(225, 87, 90)',
    '1M': 'rgb(242, 142, 44)',
    '1Y': 'rgb(164, 89, 209)',
};


  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.offsetWidth,
      height: 600,
      layout: {
        background: "#000", // Dark background
        textColor: "#ffffff", // White text
      },
      grid: {
        vertLines: {
          color: "#fff",
        },
        horzLines: {
            color: "#fff",
        },
      },
      timeScale: {
        borderColor: "#fff",
      },
    });

    const candleSeries = chart.addCandlestickSeries({
    //   upColor: "#26a69a",
      upColor: '#00B54C',
      downColor: "#E12020",
      borderDownColor: "#F7525F",
      borderUpColor: "#66BB6A",
      wickDownColor: "#88898B",
      wickUpColor: "#88898B",
    });

    candleSeries.setData(data);

    // Cleanup on component unmount
    return () => {
      chart.remove();
    };
  }, [data]);

  return <div ref={chartContainerRef} style={{ width: "100%", height: "600px" }} />;
};

export default TradingChart;
