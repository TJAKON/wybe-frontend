import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const TradingChart = ({ data }) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null); // Keep a reference to the chart instance

  useEffect(() => {
    // Create the chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: "#000" }, // Dark background
        textColor: "#ffffff", // White text
      },
      grid: {
        vertLines: {
          color: "#444", // Grid color
        },
        horzLines: {
          color: "#444", // Grid color
        },
      },
      timeScale: {
        borderColor: "#444", // Time scale border color
      },
    });

    // Add the candlestick series
    const candleSeries = chart.addCandlestickSeries({
      upColor: "#00B54C",
      downColor: "#E12020",
      borderDownColor: "#F7525F",
      borderUpColor: "#66BB6A",
      wickDownColor: "#88898B",
      wickUpColor: "#88898B",
    });

    // Set data to the candlestick series
    candleSeries.setData(data);

    // Store the chart instance for later reference
    chartRef.current = chart;

    // Resize chart on window resize
    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({
          width: chartContainerRef.current.offsetWidth,
          height: chartContainerRef.current.offsetHeight,
        });
      }
    };

    handleResize(); // Set initial dimensions
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [data]);

  return (
    <div
      ref={chartContainerRef}
      className="w-full h-[500px] sm:h-[164px] md:h-[400px] lg:h-[500px]" // Adjust heights for responsiveness
    />
  );
};

export default TradingChart;
